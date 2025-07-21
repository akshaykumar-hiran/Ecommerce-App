import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../contexts/CartContext';

const CartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, updateCart } = useCart();

  const handleRemoveItem = (id) => {
    console.log(cartItems);
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }; // decrease
          }
          return null; // quantity == 1 → remove from cart
        }
        return item;
      })
      .filter(Boolean); // remove null items
    console.log(updatedItems);

    updateCart(updatedItems);
  };

  const productTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Your Cart</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.productDetails}>Size: {item.size}</Text>
              <Text style={styles.productDetails}>Color: {item.color}</Text>
              {/* ✅ This will re-render correctly when quantity changes */}
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
            <Text style={styles.summaryText}>${productTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Shipping</Text>
            <Text style={styles.summaryText}>Freeship</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryTotal}>${productTotal.toFixed(2)}</Text>
          </View>
        </View>
        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 37,
    paddingHorizontal: 16,
    marginBottom: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
});
