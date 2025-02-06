import { COLORS } from '@/constants/colors';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.GREY_3 },
        headerTintColor: COLORS.DARK,
      }}
    >
      <Stack.Screen name='index' options={{ title: 'All Categories' }} />
      <Stack.Screen name='categories' options={{ title: 'All Categories' }} />
      <Stack.Screen name='category/[category]/index' options={{ title: 'Meals' }} />
    </Stack>
  );
}
