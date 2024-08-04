import { AuthContext } from '@/context/AuthContext'
import { Redirect, useRouter } from 'expo-router'
import React, { useContext, useEffect } from 'react'
import { Text, ActivityIndicator, View } from "react-native"

const index = () => {
  const router = useRouter()
  const { isLoading, userToken } = useContext(AuthContext)

  useEffect(() => {
    if(!isLoading){
      if(userToken !== null){
        router.replace("(tabs)/app")
      }else{
        router.replace("/getStarted")
      }
    } 
  })

  if(isLoading) {
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size="large" />
    </View>
  }

  return null;
}

export default index