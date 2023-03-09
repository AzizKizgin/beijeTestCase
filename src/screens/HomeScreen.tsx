import React from 'react';
import {Box, Text, VStack} from 'native-base';
import MenuTabs from '../navigation/MenuTabs';
import MenuButton from '../components/MenuButton';
import {strings} from '../utils/strings';

const HomeScreen = () => {
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
        <MenuButton />
      </Box>
    </Box>
  );
};

export default HomeScreen;
