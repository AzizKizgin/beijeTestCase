import React from 'react';
import {Pressable, Text} from 'native-base';
import {useShopping} from '../context/ShoppingContext';

const MenuButton = () => {
  const {openModal} = useShopping();
  return (
    <Pressable
      onPress={openModal}
      backgroundColor="darkGray"
      paddingY={4}
      justifyContent="center"
      alignItems="center"
      marginX={4}
      borderRadius={'full'}>
      <Text color="white">Paketini Gör</Text>
    </Pressable>
  );
};

export default MenuButton;
