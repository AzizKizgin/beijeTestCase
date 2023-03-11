import React, {FC} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';
import {useShopping} from '../../context/ShoppingContext';

interface DailyPadShopCardProps {
  dailyPad?: Product;
  superDailyPad?: Product;
}

const DailyPadShopCard: FC<DailyPadShopCardProps> = (props) => {
  const {
    dailyPad = {
      title: strings.dailyPad,
      count: 0,
    },
    superDailyPad = {
      title: strings.superDailyPad,
      count: 0,
    },
  } = props;

  const {removeItem} = useShopping();

  if (dailyPad.count === 0 && superDailyPad.count === 0) {
    return null;
  }
  return (
    <Box backgroundColor={'white'} padding={4}>
      <Text fontSize={'lg'} color={'darkGray'} fontWeight={'semibold'}>
        {strings.padPacks}
      </Text>
      <Text fontSize={'sm'} color={'gray.400'}>
        {dailyPad.count > 0 ? `${dailyPad.count} ${strings.dailyPad}, ` : ''}
        {superDailyPad.count > 0
          ? `${superDailyPad.count} ${strings.superDailyPad} `
          : ''}
      </Text>
      <Pressable
        marginTop={2}
        onPress={() => {
          removeItem(dailyPad, superDailyPad);
        }}>
        <Text fontSize={'sm'} color={'darkGray'} fontWeight={'semibold'}>
          {strings.removefromPack}
        </Text>
      </Pressable>
    </Box>
  );
};

export default DailyPadShopCard;
