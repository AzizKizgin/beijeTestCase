import React, {useEffect, useState} from 'react';
import {Box, Icon, Pressable, Text} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {useToast} from '@aziz_kizgin/react-native-toast-message';
import {strings} from '../../utils/strings';
import CartNotification from '../CartNotification';
import {useShopping} from '../../context/ShoppingContext';

const ShopCart = () => {
  const {showToast} = useToast();
  const {cart} = useShopping();
  const [isCartFilled, setIsCartFilled] = useState(false);
  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => {
      return total + 3 * item.count;
    }, 0);
    if (totalPrice > 0) {
      setIsCartFilled(true);
    } else {
      setIsCartFilled(false);
    }
  }, [cart]);

  const onPress = () => {
    showToast({
      color: 'info',
      message: strings.underConstruction,
      duration: 2000,
      position: 'bottom',
    });
  };

  return (
    <Pressable onPress={onPress}>
      <Icon as={Feather} name="shopping-cart" size="22" color="darkGray" />
      {isCartFilled && <CartNotification />}
    </Pressable>
  );
};

export default ShopCart;
