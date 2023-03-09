import React from 'react';
import {NativeBaseProvider} from 'native-base';
import appTheme from './src/theme/appTheme';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <NativeBaseProvider theme={appTheme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
