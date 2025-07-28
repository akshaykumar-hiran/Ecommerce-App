import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import addressList from '../data/address.json';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AddEditAddress({ navigation, route }) {
  const editData = route.params?.editData || null;
  const editMode = route.params?.editMode || false;

  const [formData, setFormData] = useState({
    id: editData?.id || null,
    label: editData?.label || '',
    address: editData?.address || '',
    mobile: editData?.mobile || '',
    landmark: editData?.landmark || '',
    district: editData?.district || '',
    state: editData?.state || '',
    country: editData?.country || '',
    pincode: editData?.pincode || '',
    icon: editData?.icon || 'home-outline',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (formData.label && formData.address) {
      navigation.navigate('DeliveryAddress', {
        newAddress: formData,
        editMode: editMode,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>
          {editMode ? 'Edit Address' : 'Add New Address'}
        </Text>

        {/* Empty View to balance the layout */}
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={formData.label}
          onChangeText={(text) => handleChange('label', text)}
        />
        <TextInput
          placeholder="Mobile No."
          style={styles.input}
          keyboardType="phone-pad"
          value={formData.mobile}
          onChangeText={(text) => handleChange('mobile', text)}
        />
        <TextInput
          placeholder="Address"
          style={styles.input}
          multiline
          value={formData.address}
          onChangeText={(text) => handleChange('address', text)}
        />
        <TextInput
          placeholder="Landmark"
          style={styles.input}
          value={formData.landmark}
          onChangeText={(text) => handleChange('landmark', text)}
        />
        <TextInput
          placeholder="District"
          style={styles.input}
          value={formData.district}
          onChangeText={(text) => handleChange('district', text)}
        />
        <TextInput
          placeholder="State"
          style={styles.input}
          value={formData.state}
          onChangeText={(text) => handleChange('state', text)}
        />
        <TextInput
          placeholder="Country"
          style={styles.input}
          value={formData.country}
          onChangeText={(text) => handleChange('country', text)}
        />
        <TextInput
          placeholder="Pincode"
          style={styles.input}
          keyboardType="number-pad"
          value={formData.pincode}
          onChangeText={(text) => handleChange('pincode', text)}
        />

        <View style={styles.radioGroup}>
          <TouchableOpacity
            onPress={() => handleChange('icon', 'home-outline')}
            style={styles.radioOption}>
            <View
              style={[
                styles.radioOuter,
                formData.icon === 'home-outline' && styles.radioOuterActive,
              ]}>
              {formData.icon === 'home-outline' && (
                <View style={styles.radioInner} />
              )}
            </View>
            <Text style={styles.radioText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleChange('icon', 'office-building-outline')}
            style={styles.radioOption}>
            <View
              style={[
                styles.radioOuter,
                formData.icon === 'office-building-outline' &&
                  styles.radioOuterActive,
              ]}>
              {formData.icon === 'office-building-outline' && (
                <View style={styles.radioInner} />
              )}
            </View>
            <Text style={styles.radioText}>Work</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>
            {editMode ? 'Update' : 'Save'} Address
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 37,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    flex: 1,
    color: '#000',
  },

  formContainer: { padding: 20 },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontFamily: 'Poppins_400Regular',
  },
  radioGroup: { flexDirection: 'row', marginTop: 10, marginBottom: 20 },
  radioOption: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterActive: { borderColor: '#000' },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  radioText: { marginLeft: 8, fontFamily: 'Poppins_400Regular' },
  saveBtn: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
  },
});
