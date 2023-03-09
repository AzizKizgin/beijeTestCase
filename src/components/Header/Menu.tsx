import React from 'react';
import {Icon, Pressable} from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';

const Menu = () => {
  return (
    <Pressable>
      <Icon as={Octicons} name="three-bars" size="22" color="darkGray" />
    </Pressable>
  );
};

export default Menu;
