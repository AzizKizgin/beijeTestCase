import React, {useEffect, useState} from 'react';
import {Icon, Pressable} from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useBottomMenu} from '../../context/BottomMenuContext';
import {Animated} from 'react-native';

const Menu = () => {
  const {handleMenu, menuVisible} = useBottomMenu();
  const rotate = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(rotate, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [{rotate: rotateInterpolate}],
      }}>
      <Pressable onPress={handleMenu}>
        {menuVisible ? (
          <Icon
            as={MaterialCommunityIcons}
            name="close"
            size="22"
            color="darkGray"
          />
        ) : (
          <Icon as={Octicons} name="three-bars" size="22" color="darkGray" />
        )}
      </Pressable>
    </Animated.View>
  );
};

export default Menu;
