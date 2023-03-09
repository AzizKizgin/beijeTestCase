import React, {useState} from 'react';
import {Box, VStack} from 'native-base';
import ProductSelector from '../ProductSelector';
import {strings} from '../../utils/strings';

const DailyPadsTab = () => {
  const [dailyPads, setDailyPads] = useState(0);
  const [superDailyPads, setsuperDailyPads] = useState(0);
  return (
    <Box variant="tabBar">
      <VStack space={2} marginY={4}>
        <ProductSelector
          title={strings.dailyPad}
          setValue={setDailyPads}
          value={dailyPads}
          maximumValue={100}
        />
        <ProductSelector
          title={strings.superDailyPad}
          setValue={setsuperDailyPads}
          value={superDailyPads}
          maximumValue={100}
        />
      </VStack>
    </Box>
  );
};

export default DailyPadsTab;
