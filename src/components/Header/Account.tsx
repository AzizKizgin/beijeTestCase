import React from 'react';
import {Icon, Pressable} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

const Account = () => {
  return (
    <Pressable>
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
