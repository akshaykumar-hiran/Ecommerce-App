import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log into</Text>
      <Text style={styles.subheading}>your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#777"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('App')}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or log in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require('../assets/icons/apple.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require('../assets/icons/google.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require('../assets/icons/facebook.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signupLink}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    backgroundColor: '#fff',
  },

  heading: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },

  subheading: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 40,
    color: '#000',
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 25,
    fontSize: 16,
    paddingVertical: 8,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  forgotText: {
    color: '#666',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
  },

  loginButton: {
    backgroundColor: '#2E221D',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
  },

  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#777',
    fontFamily: 'Poppins_400Regular',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  iconWrapper: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  signupLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },

  signupText: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
});

