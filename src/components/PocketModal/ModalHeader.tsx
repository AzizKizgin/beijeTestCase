import React, {FC} from 'react';
import {Box, Icon, Text, Pressable} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = ({onClose}) => {
  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      marginBottom={6}>
      <Text fontSize={'lg'} fontWeight={'bold'} color={'darkGray'}>
        Özel Paketin
      </Text>
      <Pressable onPress={onClose}>
        <Icon
          as={MaterialCommunityIcons}
          name={'close'}
          size={5}
          color={'gray.500'}
        />
      </Pressable>
    </Box>
  );
};

export default ModalHeader;
