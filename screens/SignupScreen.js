import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useState } from 'react';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSignup = async () => {
  //   if (!email || !password || !confirmPassword || !name) {
  //     console.log('All field are required')
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     console.log("Password do not match")
  //     return;
  //   }

  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const user = userCredential.user;

  //     await addDoc(collection(db, 'users'), {
  //       uid: user.uid,
  //       name: name,
  //       email: email,
  //       createdAt: new Date(),
  //     });

  //     console.log('Account created successfully!');
  //     navigation.navigate('App');
  //   } catch (error) {
  //     console.error('Signup error:', error);
  //    console.log('Signup failed', error.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create</Text>
      <Text style={styles.subheading}>your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#777"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor="#777"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.signupButton}
        // onPress={handleSignup}
        onPress={() => navigation.navigate('App')}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or sign up with</Text>

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

      <View style={styles.loginLink}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Log In</Text>
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
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  },

  subheading: {
    fontSize: 28,
    marginBottom: 40,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
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

  signupButton: {
    backgroundColor: '#2E221D',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },

  signupButtonText: {
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

  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  loginText: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
});
