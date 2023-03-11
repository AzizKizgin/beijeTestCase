import React, {FC} from 'react';
import {Pressable, Text} from 'native-base';
import {useShopping} from '../context/ShoppingContext';
import {strings} from '../utils/strings';

interface ButtonProps {
  onPress: () => void;
  title: string;
}
const Button: FC<ButtonProps> = (props) => {
  const {onPress, title} = props;
  return (
    <Pressable
      onPress={onPress}
      backgroundColor="darkGray"
      paddingY={4}
      marginTop={4}
      justifyContent="center"
      alignItems="center"
      marginX={4}
      borderRadius={'full'}>
      <Text color="white" fontSize={'md'}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
