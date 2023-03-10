import {createContext, ReactNode, useState, useContext, useEffect} from 'react';
import BottomMenu from '../components/BottomMenu';

interface BottomMenuContextProps {
  children: ReactNode;
}

interface BottomMenuContextType {
  handleMenu: () => void;
  menuVisible: boolean;
  closeMenu: () => void;
}

const BottomMenuContext = createContext<BottomMenuContextType>({
  handleMenu: () => {},
  menuVisible: false,
  closeMenu: () => {},
});

export const BottomMenuProvider = ({children}: BottomMenuContextProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <BottomMenuContext.Provider
      value={{
        handleMenu,
        menuVisible,
        closeMenu,
      }}>
      <>
        {children}
        <BottomMenu closeMenu={closeMenu} isOpen={menuVisible} />
      </>
    </BottomMenuContext.Provider>
  );
};

export const useBottomMenu = () => {
  return useContext(BottomMenuContext);
};
