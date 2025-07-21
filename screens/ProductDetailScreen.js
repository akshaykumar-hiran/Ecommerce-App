import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

const { width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../contexts/CartContext';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { product } = route.params;
  const [selectedColor, setSelectedColor] = useState('#FADDCB');
  const [selectedSize, setSelectedSize] = useState('L');
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigation = useNavigation();
  const [showDescription, setShowDescription] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const productImages = {
    'feature1.png': require('../assets/products/feature1.png'),
    'feature2.png': require('../assets/products/feature2.png'),
    'feature3.png': require('../assets/products/feature3.png'),
    'feature4.png': require('../assets/products/feature4.png'),
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Product Image Section */}
        <View style={styles.imageSection}>
          <Image
            source={productImages[product.image]}
            style={styles.productImage}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('App')}>
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wishBtn}
            onPress={() => setIsWishlisted(!isWishlisted)}>
            <Ionicons
              name={isWishlisted ? 'heart' : 'heart-outline'}
              size={22}
              color={isWishlisted ? 'red' : '#000'}
            />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.infoSection}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{product.productName}</Text>
            <Text style={styles.price}>₹ {product.productPrice}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {[...Array(Math.round(product.ratings))].map((_, i) => (
              <Ionicons key={i} name="star" size={16} color="#4CAF50" />
            ))}
            <Text style={styles.reviewCount}>({product.ratingCount})</Text>
          </View>

          <View style={styles.optionsRow}>
            {/* Color Section */}
            <View style={styles.optionGroup}>
              <Text style={styles.optionLabel}>Color</Text>
              <View style={styles.colorOptions}>
                {product.colors.map((color) => (
                  <TouchableOpacity
                    key={color}
                    onPress={() => setSelectedColor(color)}
                    style={[
                      styles.colorDot,
                      {
                        backgroundColor: color,
                        borderColor: selectedColor === color ? '#000' : '#fff',
                      },
                    ]}
                  />
                ))}
              </View>
            </View>

            {/* Size Section */}
            <View style={styles.optionGroup}>
              <Text style={styles.optionLabel}>Size</Text>
              <View style={styles.sizeOptions}>
                {product.sizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    style={[
                      styles.sizeBtn,
                      selectedSize === size && { backgroundColor: '#000' },
                    ]}>
                    <Text
                      style={[
                        styles.sizeText,
                        selectedSize === size && { color: '#fff' },
                      ]}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.descriptionSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.sectionTitle}>Description</Text>
            <TouchableOpacity
              onPress={() => setShowDescription(!showDescription)}>
              <Ionicons
                name={
                  showDescription
                    ? 'chevron-up-outline'
                    : 'chevron-down-outline'
                }
                size={20}
                color="#000"
                style={styles.showAllIcon}
              />
            </TouchableOpacity>
          </View>

          {showDescription && (
            <Text style={styles.descriptionText}>{product.description}</Text>
          )}
        </View>

        {/* Reviews */}
        <View style={styles.reviewSection}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity onPress={() => setShowReviews(!showReviews)}>
              <Ionicons
                name={
                  showReviews ? 'chevron-up-outline' : 'chevron-down-outline'
                }
                size={20}
                color="#000"
                style={styles.showAllIcon}
              />
            </TouchableOpacity>
          </View>

          {showReviews && (
            <>
              <Text style={styles.bigRating}>4.9</Text>
              <Text style={styles.ratingSub}>OUT OF 5</Text>

              <View style={styles.reviewBar}>
                {[80, 12, 5, 3, 0].map((percent, index) => (
                  <View key={index} style={styles.ratingRowBar}>
                    <Text>{5 - index}</Text>
                    <View style={styles.progressBar}>
                      <View
                        style={[styles.filledBar, { width: `${percent}%` }]}
                      />
                    </View>
                  </View>
                ))}
              </View>

              {product.reviews.map((review, index) => (
                <View key={index} style={styles.userReview}>
                  <Image
                    source={require('../assets/users/avatar.png')}
                    style={{ width: 32, height: 32, borderRadius: 16 }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.userName}>{review.userName}</Text>
                    <Text style={styles.userText}>{review.comment}</Text>
                  </View>
                  <Text style={styles.time}>{review.userRating}★</Text>
                </View>
              ))}
            </>
          )}
        </View>

        {/* Similar Product */}
        <View style={styles.similarSection}>
          <Text style={styles.sectionTitle}>Similar Product</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { title: 'Rise Crop Hoodie', price: '$ 43.00' },
              { title: 'Gym Crop Top', price: '$ 39.99' },
              { title: 'Sport Sweater', price: '$ 47.99' },
            ].map((item, i) => (
              <View key={i} style={styles.similarCard}>
                <View style={styles.similarImage} />
                <Text style={styles.similarTitle}>{item.title}</Text>
                <Text style={styles.similarPrice}>{item.price}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Floating Add to Cart Button */}
      <View style={styles.floatingBtnContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            addToCart({
              id: product.id,
              name: product.productName,
              price: product.productPrice,
              image: productImages[product.image],
              size: selectedSize,
              color: selectedColor,
              quantity: 1,
            });
            navigation.navigate('Cart');
          }}>
          <Text style={styles.cartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    paddingBottom: 120,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },

  imageSection: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#FAF5F3',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },

  productImage: {
    width: width,
    height: 350,
  },

  backBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
  },

  wishBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
  },

  infoSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#F3F3F6',
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },

  title: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },

  price: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },
  reviewCount: {
    marginLeft: 4,
    color: '#555',
    fontSize: 14,
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F3F3F6',
    marginTop: 20,
    gap: 20,
  },

  optionGroup: {
    marginTop: 20,
    flex: 1,
  },

  optionLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 8,
    color: '#000',
  },

  colorOptions: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },

  colorDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 3,
  },

  sizeOptions: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  sizeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sizeText: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },

  descriptionSection: {
    marginVertical: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F3F6',
  },

  descriptionText: {
    marginTop: 8,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },

  showAllIcon: {
    paddingHorizontal: 4,
  },

  reviewSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F3F6',
  },

  bigRating: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },

  ratingSub: {
    fontSize: 13,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 10,
  },

  reviewBar: {
    marginVertical: 10,
  },

  ratingRowBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    gap: 6,
  },

  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },

  filledBar: {
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },

  userReview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
    gap: 10,
  },

  userName: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 13,
    color: '#000',
  },

  userText: {
    fontSize: 13,
    color: '#333',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 18,
  },

  time: {
    fontSize: 11,
    color: '#999',
    position: 'absolute',
    right: 0,
    fontFamily: 'Poppins_400Regular',
  },

  similarSection: {
    padding: 20,
  },

  similarCard: {
    width: 120,
    marginRight: 15,
  },

  similarImage: {
    backgroundColor: '#eee',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },

  similarTitle: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },

  similarPrice: {
    fontSize: 13,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
  },

  floatingBtnContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },

  cartButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },

  cartButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },

  showAllIcon: {
    alignSelf: 'flex-start',
    marginVertical: 6,
  },
});
