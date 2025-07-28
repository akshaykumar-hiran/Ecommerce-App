import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const vouchers = [
  {
    id: 1,
    percent: '50%',
    title: 'Black Friday',
    subtitle: 'Sale off 50%',
    code: 'fridaysale',
    expiry: '20\nDec',
    color: '#1C1C1E',
    textColor: '#fff',
  },
  {
    id: 2,
    percent: '30%',
    title: 'Holiday Sale',
    subtitle: 'Sale off 30%',
    code: 'holiday30',
    expiry: '22\nDec',
    color: '#6D6D6D',
    textColor: '#fff',
  },
  {
    id: 3,
    percent: '20%',
    title: 'First order',
    subtitle: '20% off your first order',
    code: 'welcome',
    expiry: '28\nDec',
    color: '#B0B0B0',
    textColor: '#fff',
  },
];

export default function VoucherScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voucher</Text>
        <View style={{ width: 24 }} /> {/* Placeholder to balance header */}
      </View>

      <ScrollView contentContainerStyle={styles.voucherList}>
        {vouchers.map((voucher) => (
          <View key={voucher.id} style={styles.card}>
            <View
              style={[styles.percentBox, { backgroundColor: voucher.color }]}>
              <Text style={[styles.percentText, { color: voucher.textColor }]}>
                {voucher.percent}
              </Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{voucher.title}</Text>
              <Text style={styles.subtitle}>{voucher.subtitle}</Text>
              <Text style={styles.code}>
                Code: <Text style={{ fontWeight: '600' }}>{voucher.code}</Text>
              </Text>
            </View>
            <View style={styles.expiry}>
              <Text style={styles.exp}>Exp.</Text>
              <Text style={styles.date}>{voucher.expiry}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Poppins_400Regular',
    paddingTop: 37,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
  voucherList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },
  percentBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
  },
  details: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#888',
  },
  code: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  expiry: {
    alignItems: 'center',
  },
  exp: {
    fontSize: 11,
    fontFamily: 'Poppins_400Regular',
    color: '#aaa',
  },
  date: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: '#000',
  },
});
