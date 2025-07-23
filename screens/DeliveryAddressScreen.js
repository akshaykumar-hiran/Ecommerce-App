import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import addressData from '../data/address.json';

export default function DeliveryAddressScreen({ navigation, route }) {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [addresses, setAddresses] = useState(addressData);

  useEffect(() => {
    const { newAddress, editMode } = route.params || {};

    if (newAddress) {
      if (editMode) {
        // Update address
        const updatedList = addresses.map((addr) =>
          addr.id === newAddress.id ? newAddress : addr
        );
        setAddresses(updatedList);
      } else {
        // Add new address
        const id = Date.now(); // generate unique ID
        setAddresses([...addresses, { ...newAddress, id }]);
      }
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.card,
              {
                borderColor: selectedAddress === item.id ? '#000' : '#E0E0E0',
              },
            ]}
            onPress={() => setSelectedAddress(item.id)}>
            <View style={styles.radioIcon}>
              <View
                style={[
                  styles.radioOuter,
                  selectedAddress === item.id && styles.radioOuterActive,
                ]}>
                {selectedAddress === item.id && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </View>

            <View style={styles.iconBox}>
              <MaterialCommunityIcons name={item.icon} size={22} color="#333" />
              <Text style={styles.sendTo}>SEND TO</Text>
            </View>

            <View style={styles.details}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddEditAddress', {
                  editData: item,
                  editMode: true,
                })
              }>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

        {/* Add new address */}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('AddEditAddress')}>
          <Text style={styles.addBtnText}>Add new address</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.2,
    elevation: 1,
  },
  radioIcon: {
    marginRight: 12,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterActive: {
    borderColor: '#000',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  iconBox: {
    alignItems: 'center',
    marginRight: 10,
  },
  sendTo: {
    fontSize: 10,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
  },
  details: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },
  address: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#888',
    marginTop: 2,
  },
  edit: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#ff3e3e',
  },
  addBtn: {
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
  },
});
