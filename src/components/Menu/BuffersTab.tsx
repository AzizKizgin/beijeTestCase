import React, {useState} from 'react';
import {Box, Text, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';

const BuffersTab = () => {
  const [miniBuffer, setMiniBuffer] = useState(0);
  const [standartBuffer, setStandartBuffer] = useState(0);
  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          title="Mini Buffer"
          setValue={setMiniBuffer}
          value={miniBuffer}
          maximumValue={60}
        />
        <ProductSelector
          title="Standart Buffer"
          setValue={setStandartBuffer}
          value={standartBuffer}
          maximumValue={60}
        />
      </VStack>
    </Box>
  );
};

export default BuffersTab;
