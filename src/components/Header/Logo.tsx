import React, {FC} from 'react';
import {Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';
interface LogoProps {
  onPress?: () => void;
}
const Logo: FC<LogoProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text fontSize={'2xl'} fontWeight={'semibold'} color={'logo'}>
        {strings.logo}
      </Text>
    </Pressable>
  );
};

export default Logo;
