import React, { useRef } from 'react';
import { useLocalSearchParams } from 'expo-router'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const stadiums = [
  { id: 1, name: 'BTS Turf Club', address: 'St Meera School (~3.73 km)', rating: "4.2(10)" },
  { id: 2, name: 'ABC Turf Club', address: 'St Meera School (~3.73 km)', rating: "3.8(25)" },
  { id: 3, name: 'XYZ Turf Club', address: 'St Meera School (~3.73 km)', rating: "4.5(7)" },
  // Add more stadiums as needed
];

const HEADER_HEIGHT = 80;

const stadium = () => {
  const { id } = useLocalSearchParams()
  const stadium = stadiums[id - 1];

  return (
    <SafeAreaView className='flex-1' style={styles.container}>
      <ScrollView className='flex-1'>
        <View className='flex flex-row'>
          <Image
            source={require("@/assets/images/background.jpg")}
            resizeMode='cover'
            className='w-full aspect-video'
          />
        </View>
        <View className='flex-1 p-4'>
          <Text className='text-2xl font-bold mb-3'>{stadium.name}</Text>
          <View className='w-full flex flex-row gap-2'>
            <Text className='pt-2'>
              <Feather name="clock" size={20} color="rgb(55 65 81)"/>
            </Text>
            <Text className='flex-1 text-base mb-2 text-gray-700'>
              6 AM- 9 AM & 3 PM - 11 PM On Weekday, 6 AM - 11 PM On Weekends
            </Text>
          </View>
          <View className='w-full flex flex-row gap-2 mb-3'>
            <Text className='pt-2'>
              <Octicons name="location" size={20} color="rgb(55 65 81)" />
            </Text>
            <Text className='flex-1 text-base mb-2 text-gray-700'>
              15, Cambridge Road, Near Sri Sai Mandir, Deena Bandu Nagar, Bengaluru, Karnataka - 560008
            </Text>
          </View>
          <Text className="text-2xl font-bold mb-3">Offers</Text>
          <View className='flex items-center flex-row gap-2 pb-2 mb-4 bg-green-200 rounded-xl'>
            <View className='flex h-6 w-6 p-1 items-center justify-center bg-green-500 rounded-full'>
              <FontAwesome5 name="percentage" size={10} color="white" />
            </View>
            <View className="flex justify-between">
              <Text className='text-base font-semibold mb-1'>Upto 30% Off</Text>
              <Text className='text-gray-600 text-sm font-thin'>Get 30% off upto ₹2100 on all sports</Text>
            </View>
          </View>
          <View className='flex flex-row gap-8 mb-4'>
            <View className='flex-1'>
              <Text className='mb-1'>Rating: 4.20 (10)</Text>
              <TouchableOpacity className='w-full p-2 mx-auto rounded-md' activeOpacity={1} style={{borderWidth: 1, borderColor: "#444"}}>
                <Text className='text-center text-gray-500'>RATE VENUE</Text>
              </TouchableOpacity>
            </View>
            <View className='flex-1'>
              <Text className='mb-1'>325 Total Games</Text>
              <TouchableOpacity className='w-full p-2 mx-auto rounded-md' activeOpacity={1} style={{borderWidth: 1, borderColor: "#444"}}>
                <Text className='text-center text-gray-500'>0 UPCOMING</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.availableSportsTitle}>Available Sports</Text>
          <View className='flex flex-row gap-6 mb-4'>
            <View className="px-4 pb-1 flex items-center pt-4" style={{borderWidth: 1, borderColor: "rgb(228 228 228)"}}>
              <MaterialIcons name="sports-cricket" size={24} color="black" />
              <Text style={styles.sport} className="pt-3">Box Cricket</Text>
            </View>
            <View className="px-4 pb-1 flex items-center pt-4" style={{borderWidth: 1, borderColor: "rgb(228 228 228)"}}>
              <Ionicons name="football" size={24} color="black" />
              <Text style={styles.sport} className="pt-3">Football</Text>
            </View>
          </View>
          <Text style={styles.amenitiesTitle}>Amenities</Text>
          <View className='flex flex-row gap-2 mb-4'>
            <Text className='bg-gray-200 flex-1 text-center text-sm py-1'>Parking</Text>
            <Text className='bg-gray-200 flex-1 text-center text-sm py-1'>Restroom</Text>
            <Text className='bg-gray-200 flex-1 text-center text-sm py-1'>Drinking Water</Text>
          </View>
          <Text style={styles.aboutVenueTitle} className='mb-4'>About Venue</Text>
          <View className="mb-10">
            <Text className='text-gray-400 mb-2'>Football: </Text>
            <Text className='text-gray-400'>
              - It is recommended but not compulsory to wear football studs while playing at the facility.
            </Text>
            <Text className='text-gray-400'>
              - Metal studs are not allowed.
            </Text>
          </View>
          <View className="mb-48">
            <Text className='text-gray-400 mb-2'>Box Cricket:</Text>
            <Text className='text-gray-400'>
              - Stumps and Bats will be provided by the venue.
            </Text>
            <Text className='text-gray-400'>
              - Users have to bring their own Cricket Balls.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className='absolute w-full bottom-6 px-4'>
        <TouchableOpacity className="flex-1 bg-green-500 flex items-center justify-center py-4 rounded-2xl">
          <Text className='flex-1 text-white text-xl'>Book Now!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    marginBottom: 16,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  offerDetails: {
    fontSize: 16,
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
  },
  totalGames: {
    fontSize: 16,
    marginBottom: 16,
  },
  availableSportsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sport: {
    fontSize: 16,
    marginBottom: 4,
  },
  amenitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amenity: {
    fontSize: 16,
    marginBottom: 4,
  },
  aboutVenueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  aboutVenueDetails: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default stadium;
