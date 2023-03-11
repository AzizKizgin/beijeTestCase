import React, {FC} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';
import {useShopping} from '../../context/ShoppingContext';

interface BufferShopCardProps {
  miniBuffer?: Product;
  standardBuffer?: Product;
}

const BufferShopCard: FC<BufferShopCardProps> = (props) => {
  const {
    miniBuffer = {
      title: strings.dailyPad,
      count: 0,
    },
    standardBuffer = {
      title: strings.superDailyPad,
      count: 0,
    },
  } = props;

  const {removeItem} = useShopping();

  if (miniBuffer.count === 0 && standardBuffer.count === 0) {
    return null;
  }
  return (
    <Box backgroundColor={'white'} padding={4}>
      <Text fontSize={'lg'} color={'darkGray'} fontWeight={'semibold'}>
        {strings.padPacks}
      </Text>
      <Text fontSize={'sm'} color={'gray.400'}>
        {miniBuffer.count > 0
          ? `${miniBuffer.count} ${strings.miniBuffer}, `
          : ''}

        {standardBuffer.count > 0
          ? `${standardBuffer.count} ${strings.superDailyPad} `
          : ''}
      </Text>
      <Pressable
        marginTop={2}
        onPress={() => {
          removeItem(miniBuffer, standardBuffer);
        }}>
        <Text fontSize={'sm'} color={'darkGray'} fontWeight={'semibold'}>
          {strings.removefromPack}
        </Text>
      </Pressable>
    </Box>
  );
};

export default BufferShopCard;
