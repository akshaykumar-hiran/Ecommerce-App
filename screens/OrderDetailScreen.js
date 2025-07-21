import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
;

export default function OrderDetailsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Order #1514</Text>

      {/* Status Box */}
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>Your order is delivered</Text>
        <Text style={styles.subStatusText}>
          Rate product to get 5 points for collect.
        </Text>
      </View>

      {/* Order Info */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Order number</Text>
          <Text style={styles.infoValue}>#1514</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tracking Number</Text>
          <Text style={styles.infoValue}>IK987362341</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Delivery address</Text>
          <Text style={styles.infoValue}>SBI Building, Software Park</Text>
        </View>
      </View>

      {/* Items */}
      <View style={styles.itemsBox}>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Maxi Dress</Text>
          <Text style={styles.itemQty}>x1</Text>
          <Text style={styles.itemPrice}>$68.00</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Linen Dress</Text>
          <Text style={styles.itemQty}>x1</Text>
          <Text style={styles.itemPrice}>$52.00</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Sub Total</Text>
          <Text style={styles.totalValue}>120.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Shipping</Text>
          <Text style={styles.totalValue}>0.00</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, { fontWeight: 'bold' }]}>Total</Text>
          <Text style={[styles.totalValue, { fontWeight: 'bold' }]}>
            $120.00
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Return home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rateButton} onPress={()=>navigation.navigate('GiveRating')}>
          <Text style={styles.rateButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  statusBox: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  subStatusText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#ddd',
    marginTop: 4,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  infoRow: {
    marginBottom: 8,
  },
  infoLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#888',
  },
  infoValue: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#000',
  },
  itemsBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 30,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemText: {
    fontFamily: 'Poppins_400Regular',
    flex: 2,
  },
  itemQty: {
    fontFamily: 'Poppins_400Regular',
    flex: 1,
    textAlign: 'center',
  },
  itemPrice: {
    fontFamily: 'Poppins_400Regular',
    flex: 1,
    textAlign: 'right',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  totalLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  totalValue: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  line: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeButton: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  homeButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  rateButton: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  rateButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#fff',
  },
});
