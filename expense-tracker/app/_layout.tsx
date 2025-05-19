import { COLORS } from '@/constants/colors';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.ACCENT_3 },
        headerTintColor: COLORS.LIGHT_1,
      }}
    >
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='manageTransaction' options={{ presentation: 'modal' }} />
    </Stack>
  );
};

export default RootLayout;
