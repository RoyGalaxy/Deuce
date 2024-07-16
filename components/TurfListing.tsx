import React from 'react';
import { useRouter } from 'expo-router';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Sample data for stadiums/products
const stadiums = [
  { id: 1, name: 'BTS Turf Club', address: 'St Meera School (~3.73 km)', rating: "4.2(10)" },
  { id: 2, name: 'ABC Turf Club', address: 'St Meera School (~3.73 km)', rating: "3.8(25)" },
  { id: 3, name: 'XYZ Turf Club', address: 'St Meera School (~3.73 km)', rating: "4.5(7)" },
  // Add more stadiums as needed
];

const Product = ({ name, address, rating, onPress }) => {  
  return (
    <TouchableOpacity style={styles.productContainer} className="p-2 rounded-2xl bg-white mb-4 mx-4" onPress={onPress} activeOpacity={1}>
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/images/background.jpg')} className='rounded-xl' style={styles.productImage} resizeMode="cover" />
        <TouchableOpacity style={styles.favoriteButton} className="bg-red-400 p-2" onPress={() => console.log('Add to favorites')} activeOpacity={1}>
          <Text className='text-gray-50 text-xs'>Add to favorites</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productDetails}>
        <View className='flex flex-1 pr-1 flex-row items-center justify-between mb-2'>
          <Text className="text-base font-bold flex-1">{name}</Text>
          <Text className='flex items-center justify-center h-6 w-16 text-center bg-green-200 text-emerald-600 font-bold mr-1 py-[2px] px-2 rounded-md' >{rating}</Text>
        </View>
        <Text className="mb-1 text-sm text-gray-500">{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductListing = () => {
  const router = useRouter();

  return (
    <View style={styles.container} className='mb-48'>
      {/* Vertical Scroll List of Products */}
      <ScrollView style={styles.productListContainer} className='py-3'>
        {stadiums.map((stadium) => (
          // <Text key={stadium.id}>Hello World</Text>
          <Product
            key={stadium.id}
            name={stadium.name}
            address={stadium.address}
            rating={stadium.rating}
            onPress={() => {router.push({pathname: '/stadium', params: {id: stadium.id}})}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productListContainer: {
    flex: 1,
  },
  productContainer: {
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: {width: -2, height: 4},
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productDetails: {
    padding: 8,
  },
  productRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    // backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default ProductListing;
