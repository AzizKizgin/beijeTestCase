import React from 'react';
import {Box, HStack} from 'native-base';
import Logo from './Logo';
import ShopCart from './ShopCart';
import Account from './Account';
import Menu from './Menu';

const Header = () => {
  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      paddingY={2}
      paddingX={6}
      borderBottomWidth={1}
      borderBottomColor={'gray.200'}
      backgroundColor={'bgColor'}>
      <Logo />
      <HStack space={4} alignItems={'center'} justifyContent={'center'}>
        <ShopCart />
        <Account />
        <Menu />
      </HStack>
    </Box>
  );
};

export default Header;
