import React, {FC} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';
import {useShopping} from '../../context/ShoppingContext';

interface PadShopCardProps {
  standartPad?: Product;
  superPad?: Product;
  superPlusPad?: Product;
}

const PadShopCard: FC<PadShopCardProps> = (props) => {
  const {
    standartPad = {
      title: strings.standardPad,
      count: 0,
    },
    superPad = {
      title: strings.superPad,
      count: 0,
    },
    superPlusPad = {
      title: strings.superPlusPad,
      count: 0,
    },
  } = props;

  const {removeItem} = useShopping();

  if (
    standartPad.count === 0 &&
    superPad.count === 0 &&
    superPlusPad.count === 0
  ) {
    return null;
  }
  return (
    <Box backgroundColor={'white'} padding={4}>
      <Text fontSize={'lg'} color={'darkGray'} fontWeight={'semibold'}>
        {strings.padPacks}
      </Text>
      <Text fontSize={'sm'} color={'gray.400'}>
        {standartPad.count > 0
          ? `${standartPad.count} ${strings.standardPad}, `
          : ''}
        {superPad.count > 0 ? `${superPad.count} ${strings.superPad} ` : ''}
        {strings.and}
        {superPlusPad.count > 0
          ? `${superPlusPad.count} ${strings.superPlusPad}`
          : ''}
      </Text>
      <Pressable
        marginTop={2}
        onPress={() => {
          removeItem(standartPad, superPad, superPlusPad);
        }}>
        <Text fontSize={'sm'} color={'darkGray'} fontWeight={'semibold'}>
          {strings.removefromPack}
        </Text>
      </Pressable>
    </Box>
  );
};

export default PadShopCard;
