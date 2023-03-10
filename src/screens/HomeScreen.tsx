import React from 'react';
import {Box, Text, VStack} from 'native-base';
import MenuTabs from '../navigation/MenuTabs';
import {strings} from '../utils/strings';
import Button from '../components/Button';
import {useShopping} from '../context/ShoppingContext';

const HomeScreen = () => {
  const {openModal} = useShopping();
  return (
    <Box flex={1} backgroundColor="bgColor" paddingX={1}>
      <VStack paddingX={4} space={2} marginY={4}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="darkGray"
          textAlign="center">
          {strings.createYourPack}
        </Text>
        <Text color="textColor" textAlign="center" fontSize="sm">
          {strings.createInfo}
        </Text>
      </VStack>
      <Box>
        <MenuTabs />
        <Button title={strings.seePack} onPress={openModal} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
