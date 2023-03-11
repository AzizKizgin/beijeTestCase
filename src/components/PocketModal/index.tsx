import React, {FC} from 'react';
import {Box, ScrollView, Text, VStack} from 'native-base';
import Modal from 'react-native-modal';
import ModalHeader from './ModalHeader';
import ModalInfo from './ModalInfo';
import ModalImage from './ModalImage';
import {useShopping} from '../../context/ShoppingContext';
import PadShopCard from './PadShopCard';
import {strings} from '../../utils/strings';
import DailyPadShopCard from './DailyPadShopCard';
import BufferShopCard from './BufferShopCard';
import Button from '../Button';

interface PocketModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const PocketModal: FC<PocketModalProps> = (props) => {
  const {modalVisible, setModalVisible} = props;
  const {products} = useShopping();

  const standardPad = products.find((i) => i.title === strings.standardPad);
  const superPad = products.find((i) => i.title === strings.superPad);
  const superPlusPad = products.find((i) => i.title === strings.superPlusPad);
  const dailyPad = products.find((i) => i.title === strings.dailyPad);
  const superDailyPad = products.find((i) => i.title === strings.superDailyPad);
  const miniBuffer = products.find((i) => i.title === strings.miniBuffer);
  const standardBuffer = products.find(
    (i) => i.title === strings.standardBuffer,
  );

  const totalPrice = products.reduce((total, item) => {
    return total + 3 * item.count;
  }, 0);

  return (
    <Modal
      isVisible={modalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={() => setModalVisible(false)}
      animationInTiming={600}
      style={{
        marginVertical: 10,
      }}>
      <ScrollView>
        <Box
          backgroundColor={'bgColor'}
          paddingY={5}
          paddingX={4}
          borderRadius={'md'}>
          <ModalHeader
            onClose={() => {
              setModalVisible(false);
            }}
          />
          <VStack space={6}>
            <ModalInfo />
            <ModalImage />
            <PadShopCard
              standartPad={standardPad}
              superPad={superPad}
              superPlusPad={superPlusPad}
            />
            <DailyPadShopCard
              dailyPad={dailyPad}
              superDailyPad={superDailyPad}
            />
            <BufferShopCard
              miniBuffer={miniBuffer}
              standardBuffer={standardBuffer}
            />
            <Button
              title={strings.addToCart + ` (₺${totalPrice})`}
              onPress={() => {}}
            />
          </VStack>
        </Box>
      </ScrollView>
    </Modal>
  );
};

export default PocketModal;
