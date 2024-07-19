import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)/app" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)/Home" options={{title: "", headerShown: true, headerShadowVisible: false, headerTitleStyle: {fontSize: 18,} }}/>
        <Stack.Screen name="book" options={{ headerShown: true, headerShadowVisible: false,}} />
        <Stack.Screen name="(tabs)/Community" options={{title: "Community", headerShown: true, headerShadowVisible: false, headerTitleStyle: {fontSize: 18,}}}/>
        <Stack.Screen name="stadium" options={{ headerShown: true, headerShadowVisible: false,}} />
      </Stack>
    </SafeAreaProvider>
  );
}
