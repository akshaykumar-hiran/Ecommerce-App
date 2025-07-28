import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RateProductScreen = ({ navigation }) => {
  const [rating, setRating] = useState(4);
  const [review, setReview] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Rate Product</Text>

      {/* Banner */}
      <TouchableOpacity style={styles.banner}>
        <FontAwesome name="gift" size={20} color="#fff" />
        <Text style={styles.bannerText}>Submit your review now!</Text>
      </TouchableOpacity>

      {/* Star Rating */}
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name="star"
              size={32}
              color={star <= rating ? '#2C7B65' : '#ccc'}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Review Input */}
      <TextInput
        style={styles.textArea}
        placeholder="Would you like to write anything about this product?"
        multiline
        maxLength={200}
        value={review}
        onChangeText={setReview}
        placeholderTextColor="#999"
      />
      <Text style={styles.charCount}>50 characters</Text>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 20,
  },
  banner: {
    backgroundColor: '#3A3A3A',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  bannerText: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  arrow: {
    fontSize: 18,
    color: '#fff',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 15,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    height: 120,
    textAlignVertical: 'top',
    color: '#000',
  },
  charCount: {
    textAlign: 'right',
    color: '#999',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginTop: 5,
    marginBottom: 25,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  uploadBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#bbb',
  },
  submitButton: {
    backgroundColor: '#222',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});
