import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS } from '@/constants/colors';
import FavouritesContextProvider from '@/store/context/FavouritesContext';

const screenOptions = {
  headerStyle: { backgroundColor: COLORS.GREY_3 },
  headerTintColor: COLORS.DARK,
};

export default function RootLayout() {
  return (
    <FavouritesContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={screenOptions}>
          <Stack.Screen name='drawer' options={{ headerShown: false, title: '' }} />
          <Stack.Screen name='category/[category]/index' options={{ title: 'Meals' }} />
          <Stack.Screen name='category/[category]/[meal]/index' options={{ title: 'Meal' }} />
        </Stack>
      </GestureHandlerRootView>
    </FavouritesContextProvider>
  );
}
