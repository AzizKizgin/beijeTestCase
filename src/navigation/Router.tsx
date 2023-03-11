import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import Header from '../components/Header';

const Router = () => {
  const Stack = createNativeStackNavigator<NavigationParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        header: () => <Header />,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
