import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Ionicons,
  MaterialIcons,
  Feather,
  FontAwesome5,
} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
export default function CustomDrawer(props) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.profileSection}>
        <Image source={require('../assets/users/avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Akshay Kumar</Text>
        <Text style={styles.email}>akshaykumarhiran2@gmail.com</Text>
      </View>

      <View style={styles.navSection}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            props.navigation.navigate('MainTabs', { screen: 'Home' })
          }>
          <Ionicons name="home-outline" size={20} color="#000" />
          <Text style={styles.navText}>Homepage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            props.navigation.navigate('MainTabs', { screen: 'Search' })
          }>
          <Feather name="search" size={20} color="#000" />
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            props.navigation.navigate('MainTabs', { screen: 'Cart' })
          }>
          <MaterialIcons name="shopping-bag" size={20} color="#000" />
          <Text style={styles.navText}>My Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            props.navigation.navigate('MainTabs', { screen: 'Account' })
          }>
          <FontAwesome5 name="user-circle" size={20} color="#000" />
          <Text style={styles.navText}>My Profile</Text>
        </TouchableOpacity>

        <Text style={styles.otherHeading}>OTHER</Text>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => props.navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={20} color="#000" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Feather name="mail" size={20} color="#000" />
          <Text style={styles.navText}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="information-circle-outline" size={20} color="#000" />
          <Text style={styles.navText}>About us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.modeSwitch}>
        <Text style={styles.modeLabel}>🌞 Light</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(val) => setIsDarkMode(val)}
        />
        <Text style={styles.modeLabel}>🌙 Dark</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  navSection: {
    padding: 20,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 15,
  },
  navText: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
  otherHeading: {
    fontSize: 12,
    color: '#888',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Poppins_400Regular',
  },
  modeSwitch: {
    marginTop: 'auto',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  modeLabel: {
    fontSize: 13,
    color: '#333',
    fontFamily: 'Poppins_400Regular',
  },
});
