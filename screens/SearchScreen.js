import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({navigation}) => {
  const categories = [
    {
      id: 1,
      image: require('../assets/Frame 33116.png'),
    },
    {
      id: 2,
      image: require('../assets/Frame 33124.png'),
    },
    {
      id: 3,
      image: require('../assets/Frame 33148.png'),
    },
    {
      id: 4,
      image: require('../assets/Frame 33149.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={26} color="#2E221D" />
          </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#ccc" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Categories List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}>
        {categories.map((item) => (
          <View key={item.id} style={styles.imageBox}>
            <Image source={item.image} style={styles.bannerImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 37,
    paddingHorizontal: 16,
    marginBottom:50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins_700Bold', // replaces fontWeight: 'bold'
  },

  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },

  filterBtn: {
    marginLeft: 10,
    padding: 6,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
  },

  imageBox: {
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
  },

  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
  },
});
