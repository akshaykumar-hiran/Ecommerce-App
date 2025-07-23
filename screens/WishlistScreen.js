import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useWishlist } from '../contexts/WishlistContext';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 2 - 30;

const imageMap = {
  'feature1.png': require('../assets/products/feature1.png'),
  'feature2.png': require('../assets/products/feature2.png'),
  'feature3.png': require('../assets/products/feature3.png'),
  'feature4.png': require('../assets/products/feature4.png'),
};

export default function WishlistScreen({ navigation }) {
  const { wishlistItems } = useWishlist();
  const [activeTab, setActiveTab] = useState('All items');

  const renderProduct = ({ item }) => {
    const imageSource = item.image.startsWith('local:')
      ? imageMap[item.image.replace('local:', '')]
      : { uri: item.image };

    return (
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <TouchableOpacity style={styles.heartIcon}>
          <AntDesign name="heart" size={20} color="#F87171" />
        </TouchableOpacity>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          {item.oldPrice && (
            <Text style={styles.oldPrice}>{item.oldPrice}</Text>
          )}
        </View>
        <Text style={styles.rating}>
          {'⭐'.repeat(Math.floor(item.rating))} ({item.reviews})
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Wishlist</Text>
        <View>
          <Ionicons name="notifications-outline" size={24} />
          <View style={styles.notificationDot} />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'All items' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('All items')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'All items' && styles.activeTabText,
            ]}>
            All items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Boards' && styles.activeTab]}
          onPress={() => setActiveTab('Boards')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Boards' && styles.activeTabText,
            ]}>
            Boards
          </Text>
        </TouchableOpacity>
      </View>

      {/* Wishlist Items */}
      <FlatList
        data={wishlistItems}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  notificationDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    right: -2,
    top: -2,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabText: {
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  productList: {
    paddingBottom: 80,
  },
  card: {
    width: ITEM_WIDTH,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    fontFamily: 'Poppins_600SemiBold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    marginRight: 5,
    fontFamily: 'Poppins_600SemiBold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#aaa',
    fontFamily: 'Poppins_400Regular',
  },
  rating: {
    color: '#555',
    marginTop: 5,
    fontFamily: 'Poppins_400Regular',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
});
