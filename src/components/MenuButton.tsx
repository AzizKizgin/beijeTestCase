import React from 'react';
import {Pressable, Text} from 'native-base';

const MenuButton = () => {
  return (
    <Pressable
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
