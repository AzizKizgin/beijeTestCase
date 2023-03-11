import React from 'react';
import {Box, Text} from 'native-base';

const CartNotification = () => {
  return (
    <Box
      backgroundColor="green.500"
      position="absolute"
      top={-8}
      right={-6}
      width={4}
      height={4}
      alignItems="center"
      justifyContent="center"
      rounded="full">
      <Text color="white" fontSize="xs" position="absolute" top={-1}>
        1
      </Text>
    </Box>
  );
};

export default CartNotification;
