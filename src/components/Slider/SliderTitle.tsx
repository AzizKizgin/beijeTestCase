import React, {FC} from 'react';
import {Box, Text} from 'native-base';

interface Props {
  title: string;
}
const SliderTitle: FC<Props> = (props) => {
  const {title} = props;
  return (
    <Box>
      <Text fontSize="md" color="darkGray" fontWeight="semibold" marginY={3}>
        {title}
      </Text>
    </Box>
  );
};

export default SliderTitle;
