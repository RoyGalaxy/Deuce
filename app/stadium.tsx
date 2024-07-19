import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DateSelector from '../components/DateSelector';
import TimeSlotSelector from '../components/TimeSlotSelector';
import PriorityAlert from '../components/PriorityAlert';
import MatchBooking from '../components/MatchBooking';
import BlankSpaceFooter from '@/components/BlankSpaceFooter';
import StadiumInfo from '@/components/StadiumInfo';

const BookScreen = () => {
  return (
    <View>
      <ScrollView className='bg-gray-50'>
        <View className='flex-1 flex-row'>
          <Image source={require("@/assets/images/background.jpg")} resizeMode="cover" className='flex-1 w-full aspect-video' />
        </View>
        <StadiumInfo />
        <DateSelector />
        <TimeSlotSelector />
        {/* <PriorityAlert /> */}
        <MatchBooking />
        <BlankSpaceFooter />
      </ScrollView>
      <View className='absolute w-full bottom-6 px-4'>
        <TouchableOpacity className="flex-1 bg-green-500 flex items-center justify-center py-4 rounded-2xl">
          <Text className='flex-1 text-white text-xl'>Book Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookScreen;
