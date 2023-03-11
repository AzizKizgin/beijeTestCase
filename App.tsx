import React from 'react';
import {NativeBaseProvider} from 'native-base';
import appTheme from './src/theme/appTheme';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/Router';
import {ShoppingProvider} from './src/context/ShoppingContext';
import {BottomMenuProvider} from './src/context/BottomMenuContext';
import {ToastMessageProvider} from '@aziz_kizgin/react-native-toast-message';

const App = () => {
  return (
    <NativeBaseProvider theme={appTheme}>
      <ShoppingProvider>
        <BottomMenuProvider>
          <ToastMessageProvider>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </ToastMessageProvider>
        </BottomMenuProvider>
      </ShoppingProvider>
    </NativeBaseProvider>
  );
};

export default App;
