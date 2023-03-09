import React, {FC} from 'react';
import {Box, Text} from 'native-base';

interface SliderBottomProps {
  value: number;
  maximumValue: number;
}

const SliderBottom: FC<SliderBottomProps> = (props) => {
  const {value, maximumValue} = props;
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text fontSize="sm" color="darkGray" fontWeight="semibold">
        0
      </Text>
      <Text fontSize="sm" color="darkGray" fontWeight="semibold">
        {maximumValue}
      </Text>
    </Box>
  );
};

export default SliderBottom;
