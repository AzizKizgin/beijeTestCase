import React from 'react';
import {Icon, Pressable} from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';
import {useBottomMenu} from '../../context/BottomMenuContext';

const Menu = () => {
  const {handleMenu} = useBottomMenu();
  return (
    <Pressable onPress={handleMenu}>
      <Icon as={Octicons} name="three-bars" size="22" color="darkGray" />
    </Pressable>
  );
};

export default Menu;
