import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'

const BookButton = ({date, timeSlot, sport, stadiumId, day, month}) => {
  const router = useRouter()

  const bookTurf = async () => {
    let res = await AsyncStorage.getItem("@user")
    let userInfo = JSON.parse(res)
    let user;
    if(userInfo._id){
      user = {_id: userInfo._id}
    }else{
      user = {googleId: userInfo.id}
    }
    let data = {
      date,
      startTime: timeSlot,
      sport,
      stadiumId,
      user,
      day,
      month,
    }

    try{
      const res = await axios.post("https://deuce.co.in/api/bookings/book",data)
      if(res.status === 201){
        router.replace('(tabs)/app')
      }
    } catch (err){
      console.log(err)
    }
  }

  return (
    <View className='absolute w-full bottom-6 px-4'>
      <TouchableOpacity className="flex-1 bg-green-500 flex items-center justify-center py-4 rounded-2xl" onPress={() => bookTurf()}>
        <Text className='flex-1 text-white text-xl'>Book Now!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BookButton
