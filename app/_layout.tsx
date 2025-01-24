import Auth from '@/context/auth/authContext';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 console.log("Root Layout")
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
    <PaperProvider>
      {/* <SafeAreaProvider> */}
        <Auth>
          <Stack>
            {/* <Stack.Screen name="" options={{ headerShown: false }} /> */}
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen
              name="buy"
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="sell"
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen name="inventory" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </Auth>
      {/* </SafeAreaProvider> */}
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
