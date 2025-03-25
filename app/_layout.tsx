import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
    duration: 1000,
    fade: true
})

// TODO: For global appearance update in the future, read this:
// https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/Appearance/AppearanceExample.js

export default function RootLayout() {
  // load user name
  const [nameLoaded, setNameLoaded] = useState(false);
  // load font(s)
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (error) {
      throw error;
    }
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
      const nameCheck = async() => {
          try {
              const data = await AsyncStorage.getItem("name");
              setNameLoaded(!!data);
          } catch (error) {
              console.error(error);
          } finally {
              setNameLoaded(false);
          }
      }
      nameCheck();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
      <Stack initialRouteName={nameLoaded ? "index" : } screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen
            name="index"
        />
      </Stack>
  );
}
