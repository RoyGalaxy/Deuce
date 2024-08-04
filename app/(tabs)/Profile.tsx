import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const Profile = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View className="flex-1">
      <View className='flex flex-row flex-1 px-2 pt-4'>
        <TouchableOpacity className='flex justify-center flex-1 bg-white h-12 px-4 rounded-md' onPress={logout}>
          <Text className="text-red-400 font-bold text-lg">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile