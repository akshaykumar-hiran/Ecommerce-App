import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import products from '../data/products.json';

const HomeScreen = ({ navigation }) => {
  const onNotificationPress = () => console.log('Notification Press');
  const [activeCategory, setActiveCategory] = useState('Women');
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (item) => item.category === activeCategory
    );
    setFeaturedProducts(filtered);
  }, [activeCategory]);

  const productImages = {
    'feature1.png': require('../assets/products/feature1.png'),
    'feature2.png': require('../assets/products/feature2.png'),
    'feature3.png': require('../assets/products/feature3.png'),
    'feature4.png': require('../assets/products/feature4.png'),
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={26} color="#2E221D" />
            </TouchableOpacity>

            <Text style={styles.title}>GemStore</Text>

            <TouchableOpacity onPress={onNotificationPress}>
              <Ionicons
                name="notifications-outline"
                size={26}
                color="#2E221D"
              />
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            {[
              {
                name: 'Women',
                image: require('../assets/categories/women.png'),
              },
              { name: 'Men', image: require('../assets/categories/men.png') },
              {
                name: 'Accessories',
                image: require('../assets/categories/accessories.png'),
              },
              {
                name: 'Beauty',
                image: require('../assets/categories/beauty.png'),
              },
            ].map((item) => {
              const isActive = activeCategory === item.name;
              return (
                <TouchableOpacity
                  key={item.name}
                  style={styles.tabItem}
                  onPress={() => setActiveCategory(item.name)}>
                  <View
                    style={[
                      styles.circle,
                      isActive ? styles.circleActive : styles.circleInactive,
                    ]}>
                    <Image
                      source={item.image}
                      style={[
                        styles.icon,
                        isActive ? styles.iconActive : styles.iconInactive,
                      ]}
                    />
                  </View>
                  <Text
                    style={isActive ? styles.tabTextActive : styles.tabText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Banner */}
          <View style={styles.bannerContainer}>
            <Image
              style={styles.bannerImage}
              source={require('../assets/Mask-Group.png')}
            />
            <Text style={styles.bannerText}>Autumn Collection 2022</Text>
          </View>

          {/* Featured Products */}
          <View style={styles.featuredContainer}>
            <Text style={styles.sectionTitle}>Feature Products</Text>
            <Text style={styles.showAll}>Show all</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.productScroll}>
            {featuredProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }>
                <View style={styles.productCard}>
                  <Image
                    source={productImages[item.image]}
                    style={styles.productImage}
                  />
                  <Text style={styles.productName}>{item.productName}</Text>
                  <Text style={styles.productPrice}>₹ {item.productPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins_700Bold',
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  tabItem: {
    alignItems: 'center',
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },

  circleActive: {
    backgroundColor: '#000',
  },

  circleInactive: {
    backgroundColor: '#eee',
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  iconActive: {
    tintColor: '#fff',
  },

  iconInactive: {
    tintColor: '#999',
  },

  tabText: {
    color: '#999',
    fontSize: 12,
  },

  tabTextActive: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },

  bannerContainer: {
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 16,
  },

  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },

  bannerText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },

  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },

  showAll: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins_400Regular',
  },

  productScroll: {
    flexDirection: 'row',
    marginBottom: 60,
    paddingHorizontal: 4,
  },

  productCard: {
    marginRight: 16,
    width: 150,
  },

  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  productName: {
    marginTop: 8,
    fontFamily: 'Poppins_600SemiBold',
  },

  productPrice: {
    color: '#000',
    marginTop: 4,
    fontFamily: 'Poppins_700Bold',
  },
});
