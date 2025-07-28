import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome6,
  FontAwesome5,
} from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileSettings')}>
            <Image
              source={require('../assets/users/avatar.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.name}>Akshay Kumar Hiran</Text>
            <Text style={styles.email}>akshaykumarhiran2@gmail.com</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings-sharp" size={26} color="black" />
          </TouchableOpacity>
        </View>

        {/* Profile Options */}
        <View style={styles.card}>
          <ProfileItem
            icon="location-dot"
            label="Address"
            iconType="FontAwesome6"
            onPress={() => {
              navigation.navigate('Address');
            }}
          />
          <ProfileItem
            icon="payments"
            label="Payment Method"
            iconType="MaterialIcons"
            onPress={() => {}}
          />
          <ProfileItem
            icon="shopping-bag"
            label="My Orders"
            iconType="MaterialIcons"
            onPress={() => {
              navigation.navigate('MyOrders');
            }}
          />
          <ProfileItem
            icon="ticket-alt"
            label="Voucher"
            iconType="FontAwesome5"
            onPress={() => {
              navigation.navigate('Voucher');
            }}
          />
          <ProfileItem
            icon="heart"
            label="My Wishlist"
            iconType="FontAwesome6"
            onPress={() => navigation.navigate('Wishlist')}
          />
          <ProfileItem
            icon="star"
            label="Rate this app"
            iconType="FontAwesome6"
            onPress={() => {}}
          />
          <ProfileItem
            icon="logout"
            label="Log out"
            iconType="MaterialIcons"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const ProfileItem = ({ icon, label, onPress, iconType = 'MaterialIcons' }) => {
  const IconComponent =
    iconType === 'Ionicons'
      ? Ionicons
      : iconType === 'FontAwesome5'
      ? FontAwesome5
      : iconType === 'FontAwesome6'
      ? FontAwesome6
      : MaterialIcons;

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.iconLabel}>
        <IconComponent
          name={icon}
          size={20}
          color="#999"
          style={{ width: 25 }}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
    paddingHorizontal: 16,
    marginBottom: 50,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins_700Bold',
  },

  email: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Poppins_400Regular',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },

  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    marginLeft: 10,
    fontSize: 15,
    color: '#333',
    fontFamily: 'Poppins_700Bold',
  },
});
