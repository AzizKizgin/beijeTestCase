import React, {FC, useEffect, useRef} from 'react';
import {Box, Center, Icon, Pressable, Text, VStack} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {menuItems} from '../../utils/consts';
import {Animated, PanResponder} from 'react-native';
import AnimatedBox from '../Animated/AnimatedBox';

interface BottomMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const BottomMenu: FC<BottomMenuProps> = ({isOpen, closeMenu}) => {
  const translateY = useRef(new Animated.Value(600)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dy > 0) {
          translateY.setValue(gesture.dy);
        }
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dy > 0 && gesture.vy < 0.5) {
          closeMenu();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{transform: [{translateY}]}}>
      <AnimatedBox
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        borderTopRadius={'xl'}
        bg="darkGray"
        padding={4}
        justifyContent="center">
        <Box
          alignSelf={'center'}
          width={10}
          height={'1.5'}
          bg="white"
          borderRadius={'full'}
        />
        <VStack>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              paddingX={4}
              paddingY={3}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Text fontSize="md" color="white">
                {item.title}
              </Text>
              {item.icon && (
                <Icon
                  as={MaterialCommunityIcons}
                  name={item.icon}
                  size="lg"
                  color="white"
                />
              )}
            </Pressable>
          ))}
        </VStack>
      </AnimatedBox>
    </Animated.View>
  );
};

export default BottomMenu;
