import React from 'react';
import {Box, HStack} from 'native-base';
import Logo from './Logo';
import ShopCart from './ShopCart';
import Account from './Account';
import Menu from './Menu';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();
  const onShopCartPress = () => {
    navigation.navigate('Cart');
  };
  const onAccountPress = () => {
    navigation.navigate('Account');
  };
  const onLogoPress = () => {
    navigation.navigate('Home');
  };
  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      paddingY={2}
      paddingX={6}
      backgroundColor={'bgColor'}>
      <Logo onPress={onLogoPress} />
      <HStack space={4} alignItems={'center'} justifyContent={'center'}>
        <ShopCart onPress={onShopCartPress} />
        <Account onPress={onAccountPress} />
        <Menu />
      </HStack>
    </Box>
  );
};

export default Header;
