import React, {useState} from 'react';
import {Box, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';

const PadsTab = () => {
  const [standartPad, setStandartPad] = useState(0);
  const [superPad, setSuperPad] = useState(0);
  const [superPlusPad, setSuperPlusPad] = useState(0);
  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          maximumValue={60}
          title="Standart Ped"
          setValue={setStandartPad}
          value={standartPad}
        />
        <ProductSelector
          maximumValue={60}
          title="Super Ped"
          setValue={setSuperPad}
          value={superPad}
        />
        <ProductSelector
          maximumValue={60}
          title="Super Plus Ped"
          setValue={setSuperPlusPad}
          value={superPlusPad}
        />
      </VStack>
    </Box>
  );
};

export default PadsTab;
