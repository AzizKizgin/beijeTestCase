import React, {FC} from 'react';
import {Icon, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Account = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  const onPress = () => {
    navigation.navigate('Account');
  };

  return (
    <Pressable onPress={onPress}>
      <Icon as={Feather} name="user" size="22" color="darkGray" />
    </Pressable>
  );
};

export default Account;
