import React, {FC, useEffect, useRef, useState} from 'react';
import {Box, Center, Icon, Text} from 'native-base';
import {Slider as RNSlider} from '@miblanchard/react-native-slider';
import appTheme from '../../theme/appTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Animated} from 'react-native';
import SliderTitle from './SliderTitle';
import SliderBottom from './SliderBottom';
import ProductSlider from './ProductSlider';
interface Props {
  value: number;
  setValue: (value: number) => void;
  maximumValue: number;
  title: string;
}

const Slider: FC<Props> = (props) => {
  const {value, setValue, maximumValue, title} = props;

  return (
    <Box>
      <SliderTitle title={title} />
      <ProductSlider setValue={setValue} value={value} />
      <SliderBottom maximumValue={maximumValue} value={value} />
    </Box>
  );
};

export default Slider;
