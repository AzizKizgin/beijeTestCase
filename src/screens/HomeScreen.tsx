import React from 'react';
import {Box, Text, VStack} from 'native-base';
import MenuTabs from '../navigation/MenuTabs';
import {strings} from '../utils/strings';
import Button from '../components/Button';
import {useShopping} from '../context/ShoppingContext';
import {useToast} from '@aziz_kizgin/react-native-toast-message';
import appTheme from '../theme/appTheme';
const HomeScreen = () => {
  const {openModal, products} = useShopping();
  const {showToast} = useToast();
  const totalPrice = products.reduce((total, item) => {
    return total + 3 * item.count;
  }, 0);

  const onPress = () => {
    if (totalPrice === 0) {
      showToast({
        color: 'warning',
        message: strings.noProduct,
        position: 'top',
        duration: 2000,
        textStyle: {
          color: appTheme.colors.darkGray,
          fontWeight: '500',
        },
      });
    } else {
      openModal();
    }
  };
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
        <Button title={strings.seePack} onPress={onPress} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
