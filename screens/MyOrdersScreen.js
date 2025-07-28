import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ordersData = [
  {
    id: '1',
    orderNumber: '#1524',
    date: '13/05/2021',
    trackingNumber: 'IK287368838',
    quantity: 2,
    subtotal: 110,
    status: 'Pending',
  },
  {
    id: '2',
    orderNumber: '#1525',
    date: '12/05/2021',
    trackingNumber: 'IK2873218897',
    quantity: 3,
    subtotal: 230,
    status: 'Pending',
  },
  {
    id: '3',
    orderNumber: '#1526',
    date: '10/05/2021',
    trackingNumber: 'IK237368820',
    quantity: 5,
    subtotal: 490,
    status: 'Pending',
  },
  {
    id: '4',
    orderNumber: '#1527',
    date: '09/05/2021',
    trackingNumber: 'IK999999999',
    quantity: 1,
    subtotal: 99,
    status: 'Delivered',
  },
  {
    id: '5',
    orderNumber: '#1528',
    date: '08/05/2021',
    trackingNumber: 'IK888888888',
    quantity: 4,
    subtotal: 320,
    status: 'Cancelled',
  },
];

const MyOrdersScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Pending');

  const filteredOrders = ordersData.filter(
    (order) => order.status === selectedTab
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#FFA500';
      case 'Delivered':
        return '#2ECC71';
      case 'Cancelled':
        return '#FF3B30';
      default:
        return '#000';
    }
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.tracking}>
        Tracking number: {item.trackingNumber}
      </Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.subtotal}>Subtotal: ${item.subtotal}</Text>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.detailsText}>Details</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
        {item.status.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Orders</Text>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {['Pending', 'Delivered', 'Cancelled'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.activeTab,
              ]}
              onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Orders List */}
        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  orderNumber: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#000',
  },
  date: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#666',
  },
  tracking: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  quantity: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  subtotal: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#000',
  },
  detailsButton: {
    backgroundColor: '#000',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  detailsText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#fff',
  },
  statusText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 6,
  },
});
