import React, {FC} from 'react';
import {Icon, Pressable} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface AccountProps {
  onPress: () => void;
}
const Account: FC<AccountProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon as={Feather} name="user" size="22" color="darkGray" />
    </Pressable>
  );
};

export default Account;
