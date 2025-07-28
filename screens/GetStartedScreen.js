import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function GetStartedScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/welcome.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to GemStore!</Text>
        <Text style={styles.subtitle}>The home for a fashionista</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 20,
    paddingBottom: 60,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
});
