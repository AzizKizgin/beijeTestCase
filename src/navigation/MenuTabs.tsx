import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BuffersTab, DailyPadsTab, PadsTab} from '../components/Menu';
import appTheme from '../theme/appTheme';
import {Text} from 'native-base';
import {SCREEN_HEIGHT} from '../utils/consts';

const tabNames: {[key: string]: string} = {
  Pads: 'beije Ped',
  DailyPads: 'beije Günlük Ped',
  Buffers: 'beije Tampon',
};

const MenuTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      style={{
        minHeight: 450,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: appTheme.colors.bgColor,
          shadowOffset: {width: 0, height: 0},
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarLabel(props) {
          return (
            <Text
              color={props.focused ? 'darkGray' : 'gray.400'}
              fontSize="sm"
              fontWeight="bold">
              {tabNames[props.children]}
            </Text>
          );
        },
        tabBarIndicatorStyle: {
          backgroundColor: appTheme.colors.darkGray,
        },
      }}>
      <Tab.Screen name="Pads" component={PadsTab} />
      <Tab.Screen name="DailyPads" component={DailyPadsTab} />
      <Tab.Screen name="Buffers" component={BuffersTab} />
    </Tab.Navigator>
  );
};

export default MenuTabs;
