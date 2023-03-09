import React from 'react';
import {Box, Text, VStack} from 'native-base';
import MenuTabs from '../navigation/MenuTabs';
import MenuButton from '../components/MenuButton';

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor="bgColor" paddingX={1}>
      <VStack paddingX={4} space={2} marginY={4}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="darkGray"
          textAlign="center">
          Kendi Paketini Oluştur
        </Text>
        <Text color="textColor" textAlign="center" fontSize="sm">
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan, sana özel bir paket oluşturalım.
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
