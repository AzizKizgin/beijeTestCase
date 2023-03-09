import React from 'react';
import {Box, Image, Text} from 'native-base';

const ModalImage = () => {
  return (
    <Box>
      <Image source={require('../../assets/images/pocket.png')} alt="image" />
    </Box>
  );
};

export default ModalImage;
