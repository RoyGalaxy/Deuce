import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from '@/context/AuthContext';
import AppNav from '@/navigation/AppNav';
import axios from 'axios';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  //async function requestUserPermission(){
  //	const authStatus = await messaging().requestPermission();
  //	const enabled = 
  //	  authStatus === messaging.AuthorizationStatus.AUTHORIZED || 
  //	  authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //	if(enabled){
  //		console.log("Authorization status", authStatus);
  //	}
  //}

  //const getToken = async () => {
  //	const token = await messaging().getToken();
  //	console.log(token)
  //}

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //useEffect(() => {
  //  console.log("working")
  //}, [])

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
