import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Categories' }} />
      <Stack.Screen name='categories' options={{ title: 'Categories' }} />
      <Stack.Screen name='category/[category]/index' options={{ title: 'Meal Category' }} />
    </Stack>
  );
}
