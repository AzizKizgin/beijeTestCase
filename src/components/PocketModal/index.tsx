import React, {FC} from 'react';
import {Box, Text, VStack} from 'native-base';
import Modal from 'react-native-modal';
import ModalHeader from './ModalHeader';
import ModalInfo from './ModalInfo';
import ModalImage from './ModalImage';
import {useShopping} from '../../context/ShoppingContext';
import PadShopCard from './PadShopCard';
import {strings} from '../../utils/strings';

interface PocketModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const PocketModal: FC<PocketModalProps> = (props) => {
  const {modalVisible, setModalVisible} = props;
  const {products} = useShopping();
  return (
    <Modal
      isVisible={modalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={() => setModalVisible(false)}
      animationInTiming={600}
      style={{
        justifyContent: 'center',
      }}>
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
            standartPad={products.find((i) => i.title === strings.standardPad)}
            superPad={products.find((i) => i.title === strings.superPad)}
            superPlusPad={products.find(
              (i) => i.title === strings.superPlusPad,
            )}
          />
        </VStack>
      </Box>
    </Modal>
  );
};

export default PocketModal;
