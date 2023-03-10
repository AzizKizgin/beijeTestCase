import React from 'react';
import {NativeBaseProvider} from 'native-base';
import appTheme from './src/theme/appTheme';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/Router';
import {ShoppingProvider} from './src/context/ShoppingContext';
import {BottomMenuProvider} from './src/context/BottomMenuContext';

const App = () => {
  return (
    <NativeBaseProvider theme={appTheme}>
      <ShoppingProvider>
        <BottomMenuProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </BottomMenuProvider>
      </ShoppingProvider>
    </NativeBaseProvider>
  );
};

export default App;
