import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import DrawerNavigator from './DrawerNavigator';
import ProfileSettings from '../screens/ProfileSettingsScreen';
import WishlistScreen from '../screens/WishlistScreen';
import AccountScreen from '../screens/AccountScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CustomDrawer from '../components/CustomDrawer';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailScreen';
import GiveRatingScreen from '../screens/GiveRatingScreen';
import AddEditAddress from '../screens/AddEditAddress';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={DrawerNavigator} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="CustomeDrawer" component={CustomDrawer} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen name="GiveRating" component={GiveRatingScreen} />
      <Stack.Screen name="AddEditAddress" component={AddEditAddress} />
    </Stack.Navigator>
  );
}
