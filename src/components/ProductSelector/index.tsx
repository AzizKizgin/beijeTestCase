import React, {FC} from 'react';
import {Box} from 'native-base';
import SliderTitle from './SliderTitle';
import SliderBottom from './SliderBottom';
import Slider from './Slider';

interface Props {
  value: number;
  setValue: (value: number) => void;
  maximumValue: number;
  title: string;
}

const ProductSelector: FC<Props> = (props) => {
  const {value, setValue, maximumValue, title} = props;

  return (
    <Box>
      <SliderTitle title={title} />
      <Slider setValue={setValue} value={value} />
      <SliderBottom maximumValue={maximumValue} value={value} />
    </Box>
  );
};

export default ProductSelector;
