import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

// TODO: For global appearance update in the future, read this:
// https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/Appearance/AppearanceExample.js

export default function RootLayout() {
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

  if (!loaded && !error) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
  );
}
