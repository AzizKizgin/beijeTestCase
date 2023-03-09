import React from 'react';
import {Box, Pressable, ScrollView, Text, VStack} from 'native-base';
import MenuTabs from '../navigation/MenuTabs';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Box
        flex={1}
        backgroundColor="bgColor"
        paddingX={1}
        justifyContent="space-between">
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
        <MenuTabs />
        <Pressable
          backgroundColor="darkGray"
          paddingY={4}
          justifyContent="center"
          alignItems="center">
          <Text color="white">Paketini Gör</Text>
        </Pressable>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
