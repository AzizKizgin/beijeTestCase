import React, {useState, useEffect} from 'react';
import {Box, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';
import {strings} from '../../utils/strings';
import {useShopping} from '../../context/ShoppingContext';

const PadsTab = () => {
  const [standardPad, setStandardPad] = useState(0);
  const [superPad, setSuperPad] = useState(0);
  const [superPlusPad, setSuperPlusPad] = useState(0);
  const {products} = useShopping();

  useEffect(() => {
    const standardPadProduct = products.find(
      (i) => i.title === strings.standardPad,
    );
    const superPadProduct = products.find((i) => i.title === strings.superPad);
    const superPlusPadProduct = products.find(
      (i) => i.title === strings.superPlusPad,
    );

    if (!standardPadProduct) {
      setStandardPad(0);
    }
    if (!superPadProduct) {
      setSuperPad(0);
    }
    if (!superPlusPadProduct) {
      setSuperPlusPad(0);
    }
  }, [products]);

  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          maximumValue={60}
          title={strings.standardPad}
          setValue={setStandardPad}
          value={standardPad}
        />
        <ProductSelector
          maximumValue={60}
          title={strings.superPad}
          setValue={setSuperPad}
          value={superPad}
        />
        <ProductSelector
          maximumValue={60}
          title={strings.superPlusPad}
          setValue={setSuperPlusPad}
          value={superPlusPad}
        />
      </VStack>
    </Box>
  );
};

export default PadsTab;
