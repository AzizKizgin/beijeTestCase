import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Account, Cart} from '../screens';
import Header from '../components/Header';

const Router = () => {
  const Stack = createNativeStackNavigator<NavigationParams>();
  return (
    <>
      <Header />
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </>
  );
};

export default Router;
