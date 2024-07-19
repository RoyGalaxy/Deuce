import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-green-400">
      <SafeAreaView className='flex-1 flex items-center justify-center'>
        <Text className='font-bold text-3xl text-white w-full text-center'>Deuce</Text>
      </SafeAreaView>
      <View className='p-8'>
        <TouchableOpacity className='bg-white p-4 rounded-xl flex flex-row items-center justify-center' onPress={() => router.replace('/app')}>
          <Text className='text-lg font-bold flex-1 text-center'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index