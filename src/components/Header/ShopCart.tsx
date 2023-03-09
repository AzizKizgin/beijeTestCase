import React from 'react';
import {Icon, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

const ShopCart = () => {
  return (
    <Pressable>
      <Icon as={Feather} name="shopping-cart" size="22" color="darkGray" />
    </Pressable>
  );
};

export default ShopCart;
