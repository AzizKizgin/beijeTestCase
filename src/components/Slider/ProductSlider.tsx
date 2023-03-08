import React, {FC, useEffect, useRef, useState} from 'react';
import {Box, Center, Icon, Text} from 'native-base';
import {Slider as RNSlider} from '@miblanchard/react-native-slider';
import appTheme from '../../theme/appTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Animated} from 'react-native';
interface ProductSliderProps {
  value: number;
  setValue: (value: number) => void;
}
const AnimatedCenter = Animated.createAnimatedComponent(Center);

const ProductSlider: FC<ProductSliderProps> = (props) => {
  const {value, setValue} = props;

  const [isInfoVisible, setIsInfoVisible] = useState(0);
  const infoOpacity = useRef(new Animated.Value(0)).current;

  const handleInfoOpacity = () => {
    Animated.timing(infoOpacity, {
      toValue: isInfoVisible,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleInfoOpacity();
  }, [isInfoVisible]);
  return (
    <RNSlider
      value={value}
      onValueChange={(value) => setValue(value as number)}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor={appTheme.colors.darkGray}
      maximumTrackTintColor={appTheme.colors.trueGray[400]}
      step={10}
      onSlidingStart={() => setIsInfoVisible(1)}
      onSlidingComplete={() => setIsInfoVisible(0)}
      renderAboveThumbComponent={() => (
        <AnimatedCenter opacity={infoOpacity}>
          <Center
            backgroundColor="trueGray.500"
            width={8}
            height={6}
            marginBottom={-1}>
            <Text fontSize="sm" color="white" fontWeight="semibold">
              {value}
            </Text>
          </Center>
          <Center>
            <Icon
              as={Ionicons}
              name="caret-down-sharp"
              color="trueGray.500"
              size={4}
            />
          </Center>
        </AnimatedCenter>
      )}
      thumbStyle={{
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: appTheme.colors.darkGray,
      }}
    />
  );
};

export default ProductSlider;
