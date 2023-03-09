import React, {FC} from 'react';
import {Icon, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface ShopCartProps {
  onPress: () => void;
}
const ShopCart: FC<ShopCartProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon as={Feather} name="shopping-cart" size="22" color="darkGray" />
    </Pressable>
  );
};

export default ShopCart;
