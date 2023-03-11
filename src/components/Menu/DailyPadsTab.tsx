import React, {useEffect, useState} from 'react';
import {Box, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';
import {strings} from '../../utils/strings';
import {useShopping} from '../../context/ShoppingContext';

const DailyPadsTab = () => {
  const [dailyPad, setDailyPad] = useState(0);
  const [superDailyPad, setsuperDailyPad] = useState(0);
  const {products} = useShopping();

  useEffect(() => {
    const dailyPadProduct = products.find((i) => i.title === strings.dailyPad);
    const superDailyPadProduct = products.find(
      (i) => i.title === strings.superDailyPad,
    );
    if (!dailyPadProduct) {
      setDailyPad(0);
    }
    if (!superDailyPadProduct) {
      setsuperDailyPad(0);
    }
  }, [products]);
  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          title={strings.dailyPad}
          setValue={setDailyPad}
          value={dailyPad}
          maximumValue={100}
        />
        <ProductSelector
          title={strings.superDailyPad}
          setValue={setsuperDailyPad}
          value={superDailyPad}
          maximumValue={100}
        />
      </VStack>
    </Box>
  );
};

export default DailyPadsTab;
