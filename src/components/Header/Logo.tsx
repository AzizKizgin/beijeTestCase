import React, {FC} from 'react';
import {Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Logo = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  const onPress = () => {
    navigation.navigate('Home');
  };
  return (
    <Pressable onPress={onPress}>
      <Text fontSize={'2xl'} fontWeight={'semibold'} color={'logo'}>
        {strings.logo}
      </Text>
    </Pressable>
  );
};

export default Logo;
