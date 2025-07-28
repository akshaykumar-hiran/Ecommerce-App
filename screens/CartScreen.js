import React from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../contexts/CartContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, updateCart } = useCart();

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter(Boolean);

    updateCart(updatedItems);
  };

  const productTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Your Cart</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Conditional rendering */}
        {cartItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image
              source={require('../assets/shopping-cart.gif')}
              style={styles.emptyGif}
              resizeMode="contain"
            />
            <Text style={styles.emptyText}>No Product Found</Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={item.image} style={styles.productImage} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.productTitle}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                  <Text style={styles.productDetails}>Size: {item.size}</Text>
                  <Text style={styles.productDetails}>Color: {item.color}</Text>
                  <Text style={styles.productDetails}>
                    Quantity: {item.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleRemoveItem(item.id)}
                  style={{
                    backgroundColor: '#ff5252',
                    padding: 8,
                    borderRadius: 20,
                    marginTop: 6,
                    alignSelf: 'flex-end',
                  }}>
                  <Ionicons name="trash" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}

            {/* Price Summary */}
            <View style={styles.summaryContainer}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Product price</Text>
                <Text style={styles.summaryText}>
                  ${productTotal.toFixed(2)}
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryText}>Shipping</Text>
                <Text style={styles.summaryText}>Freeship</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryTotal}>
                  ${productTotal.toFixed(2)}
                </Text>
              </View>
            </View>

            {/* Checkout Button */}
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Proceed to checkout</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins_700Bold',
  },

  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
    gap: 10,
  },

  productImage: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },

  productTitle: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },

  productPrice: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    marginVertical: 4,
  },

  productDetails: {
    color: '#555',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
  },

  summaryContainer: {
    marginTop: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  summaryText: {
    color: '#555',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },

  summaryLabel: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
  },

  summaryTotal: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },

  checkoutBtn: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  emptyGif: {
    width: 250,
    height: 250,
  },

  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
});
