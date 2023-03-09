import React, {FC} from 'react';
import {Box, Text, VStack} from 'native-base';
import Modal from 'react-native-modal';
import ModalHeader from './ModalHeader';
import ModalInfo from './ModalInfo';
import ModalImage from './ModalImage';
import {useShopping} from '../../context/ShoppingContext';

interface PocketModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const PocketModal: FC<PocketModalProps> = (props) => {
  const {modalVisible, setModalVisible} = props;
  const {items} = useShopping();
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
      <Box backgroundColor={'bgColor'} paddingY={5} paddingX={4}>
        <ModalHeader
          onClose={() => {
            setModalVisible(false);
          }}
        />
        <VStack space={6}>
          <ModalInfo />
          <ModalImage />
          {items.length > 0 &&
            items.map((item, index) => {
              return (
                <Box key={index}>
                  <Text
                    fontSize={'md'}
                    color={'gray.500'}
                    fontWeight={'semibold'}>
                    {item.title}
                  </Text>
                  <Text
                    fontSize={'md'}
                    color={'gray.500'}
                    fontWeight={'semibold'}>
                    {item.count} TL
                  </Text>
                </Box>
              );
            })}
        </VStack>
      </Box>
    </Modal>
  );
};

export default PocketModal;
