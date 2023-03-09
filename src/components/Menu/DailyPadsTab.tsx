import React, {useState} from 'react';
import {Box, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';

const DailyPadsTab = () => {
  const [dailyPads, setDailyPads] = useState(0);
  const [superDailyPads, setsuperDailyPads] = useState(0);
  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          title="Günlük Ped"
          setValue={setDailyPads}
          value={dailyPads}
          maximumValue={100}
        />
        <ProductSelector
          title="Super Günlük Ped"
          setValue={setsuperDailyPads}
          value={superDailyPads}
          maximumValue={100}
        />
      </VStack>
    </Box>
  );
};

export default DailyPadsTab;
