// navigation/AccountStack.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';
import WishlistScreen from '../screens/WishlistScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddressScreen from '../screens/DeliveryAddressScreen';
import VoucherScreen from '../screens/VoucherScreen';
import AddEditAddress from '../screens/AddEditAddress';

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountHome" component={AccountScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Voucher" component={VoucherScreen} />
      <Stack.Screen name="AddeditAddress" component={AddEditAddress} />
    </Stack.Navigator>
  );
}
