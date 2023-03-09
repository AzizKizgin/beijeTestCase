import React from 'react';
import {Box, Icon, Text} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

const ModalInfo = () => {
  return (
    <Box
      padding={3}
      flexDirection={'row'}
      alignItems={'center'}
      shadow={2}
      borderRadius={'sm'}
      backgroundColor={'bgColor'}>
      <Icon as={Feather} name={'refresh-cw'} size={5} color={'gray.500'} />
      <Text
        fontSize={'md'}
        color={'gray.500'}
        fontWeight={'semibold'}
        marginLeft={4}>
        2 ayda 1 gönderim
      </Text>
    </Box>
  );
};

export default ModalInfo;
