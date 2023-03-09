import {createContext, ReactNode, useState, useContext} from 'react';
import PocketModal from '../components/PocketModal';

interface ShoppingContextProps {
  children: ReactNode;
}

type Item = {
  title: string;
  count: number;
};

interface ShoppingContextType {
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  items: Item[];
  openModal: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>({
  addItem: () => {},
  removeItem: () => {},
  items: [],
  openModal: () => {},
});

export const ShoppingProvider = ({children}: ShoppingContextProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => {
    const itemIndex = items.findIndex((i) => i.title === item.title);
    if (itemIndex === -1) {
      setItems([...items, item]);
    } else {
      const newItems = [...items];
      newItems[itemIndex] = item;
      setItems(newItems);
    }
  };
  const removeItem = (item: Item) => {
    const itemIndex = items.findIndex((i) => i.title === item.title);
    if (itemIndex !== -1) {
      const newItems = [...items];
      newItems.splice(itemIndex, 1);
      setItems(newItems);
    }
  };
  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <ShoppingContext.Provider
      value={{
        addItem,
        removeItem,
        items,
        openModal,
      }}>
      <>
        <PocketModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {children}
      </>
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(ShoppingContext);
};
