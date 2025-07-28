// navigation/DrawerNavigator.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from './AppStack'; // Your bottom tabs
import CustomDrawer from '../components/CustomDrawer'; // Optional custom drawer

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MainTabs" component={AppStack} />
    </Drawer.Navigator>
  );
}
