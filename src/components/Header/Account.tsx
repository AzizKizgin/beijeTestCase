import React, {FC} from 'react';
import {Icon, Pressable} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

interface AccountProps {
  onPress: () => void;
}
const Account: FC<AccountProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon
        as={MaterialCommunityIcons}
        name="user"
        size="22"
        color="darkGray"
      />
    </Pressable>
  );
};

export default Account;
