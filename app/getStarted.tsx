import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import React, { useContext } from 'react'
import { useRouter } from 'expo-router'
import * as WebBrowser from "expo-web-browser";
import { AuthContext } from '@/context/AuthContext'
import Auth from '@/components/Auth';

WebBrowser.maybeCompleteAuthSession();

const index = () => {
  const router = useRouter();
  const {login, googlePromptAsync, userInfo} = useContext(AuthContext)
  return (
    <View className="flex-1 bg-green-400">
      <SafeAreaView className='flex-1 flex items-center justify-center'>
        <Text className='font-bold text-3xl text-white w-full text-center'>Deuce</Text>
        <Text>{userInfo}</Text>
      </SafeAreaView>
      <View className='p-9 flex items-center justify-center'>
        <Auth />
      </View>
      {/* <View className='p-8'>        
        <TouchableOpacity className='bg-white p-4 rounded-xl flex flex-row items-center justify-center' onPress={() => router.replace('/(tabs)/app')}>
          <Text className='w-auto text-lg font-bold flex-1 text-center'>Continue With Google</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default index