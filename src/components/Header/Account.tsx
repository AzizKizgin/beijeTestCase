import React, {FC} from 'react';
import {Icon, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {useToast} from '@aziz_kizgin/react-native-toast-message';
import {strings} from '../../utils/strings';

const Account = () => {
  const {showToast} = useToast();
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
      <Icon as={Feather} name="user" size="22" color="darkGray" />
    </Pressable>
  );
};

export default Account;
