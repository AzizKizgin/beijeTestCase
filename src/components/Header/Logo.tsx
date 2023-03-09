import React, {FC} from 'react';
import {Pressable, Text} from 'native-base';
interface LogoProps {
  onPress?: () => void;
}
const Logo: FC<LogoProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text fontSize={'2xl'} fontWeight={'semibold'} color={'logo'}>
        beije.
      </Text>
    </Pressable>
  );
};

export default Logo;
