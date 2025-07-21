import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileSettingScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: 'Sunie',
    lastName: 'Pham',
    email: 'sunieux@gmail.com',
    gender: 'Female',
    phone: '(+1) 23456789',
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#2E221D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Setting</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar Section */}
      <View style={styles.avatarSection}>
        <Image source={require('../assets/users/avatar.png')} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="camera-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={formData.firstName}
              onChangeText={(text) => handleChange('firstName', text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={formData.lastName}
              onChangeText={(text) => handleChange('lastName', text)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              value={formData.gender}
              onChangeText={(text) => handleChange('gender', text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={(text) => handleChange('phone', text)}
            />
          </View>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom:50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#2E221D',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FCD6D6',
  },
  cameraIcon: {
    backgroundColor: '#2E221D',
    borderRadius: 20,
    padding: 6,
    position: 'absolute',
    right: 110,
    bottom: 0,
  },
  form: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    flex: 1,
    marginRight: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#B0AEB0',
    marginBottom: 4,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 14,
    paddingVertical: 4,
    color: '#2E221D',
  },

  saveButton: {
    backgroundColor: '#2E221D',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
  saveButtonText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    color: '#fff',
  },
});
