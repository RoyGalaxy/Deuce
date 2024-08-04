import React, { useContext } from 'react'
import { Stack } from 'expo-router';
import { AuthContext } from '@/context/AuthContext';



const AppStack = () => {
  return (
    <Stack initialRouteName='index'>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="getStarted" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/app" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/home" options={{ title: "", headerShown: true, headerShadowVisible: false, headerTitleStyle: { fontSize: 18, } }} />
      <Stack.Screen name="(tabs)/Community" options={{ title: "Community", headerShown: true, headerShadowVisible: false, headerTitleStyle: { fontSize: 18, } }} />
      <Stack.Screen name="book" options={{ headerShown: true, headerShadowVisible: false, }} />
      <Stack.Screen name="stadium" options={{ headerShown: true, headerShadowVisible: false, }} />
    </Stack>
  )
}

const AppNav = () => {
  return (
      <AppStack />
  )
}

export default AppNav