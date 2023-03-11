import React, {useEffect, useState} from 'react';
import {Box, Text, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';
import {strings} from '../../utils/strings';
import {useShopping} from '../../context/ShoppingContext';

const BuffersTab = () => {
  const [miniBuffer, setMiniBuffer] = useState(0);
  const [standardBuffer, setStandardBuffer] = useState(0);
  const {products} = useShopping();

  useEffect(() => {
    const miniBufferProduct = products.find(
      (i) => i.title === strings.dailyPad,
    );
    const standardBufferProduct = products.find(
      (i) => i.title === strings.superDailyPad,
    );
    if (!miniBufferProduct) {
      setMiniBuffer(0);
    }
    if (!standardBufferProduct) {
      setStandardBuffer(0);
    }
  }, [products]);
  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          title={strings.miniBuffer}
          setValue={setMiniBuffer}
          value={miniBuffer}
          maximumValue={60}
        />
        <ProductSelector
          title={strings.standardBuffer}
          setValue={setStandardBuffer}
          value={standardBuffer}
          maximumValue={60}
        />
      </VStack>
    </Box>
  );
};

export default BuffersTab;
