import { CurrenciesScreen } from '@/screens/Currencies';
import { HistoryScreen } from '@/screens/History';
import { HomeScreen } from '@/screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { RootDrawerScreensProps } from './types';

import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator<RootDrawerScreensProps>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerItemStyle: { borderRadius: 10 }, drawerStyle: { padding: 0 } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'CrashTrack',
          drawerLabel: 'Track',
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Currencies"
        component={CurrenciesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <FontAwesome6 name="money-bills" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="history" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
