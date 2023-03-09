import {createContext, ReactNode, useState, useContext} from 'react';
import PocketModal from '../components/PocketModal';

interface ShoppingContextProps {
  children: ReactNode;
}

interface ShoppingContextType {
  addItem: (item: Product) => void;
  removeItem: (...items: Product[]) => void;
  products: Product[];
  openModal: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>({
  addItem: () => {},
  removeItem: () => {},
  products: [],
  openModal: () => {},
});

export const ShoppingProvider = ({children}: ShoppingContextProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const addItem = (item: Product) => {
    const itemIndex = products.findIndex((i) => i.title === item.title);
    if (itemIndex === -1) {
      setProducts([...products, item]);
    } else {
      const newItems = [...products];
      newItems[itemIndex] = item;
      setProducts(newItems);
    }
  };
  const removeItem = (...items: Product[]) => {
    const newItems = products.filter((i) => {
      return !items.some((item) => item.title === i.title);
    });
    setProducts(newItems);
  };

  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <ShoppingContext.Provider
      value={{
        addItem,
        removeItem,
        products,
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
