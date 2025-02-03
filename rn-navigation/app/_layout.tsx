import { COLORS } from '@/constants/colors';
import { Stack } from 'expo-router';

const SCREEN_OPTIONS = {
  title: '',
  headerShown: false,
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={SCREEN_OPTIONS} />
      <Stack.Screen name='categories' options={SCREEN_OPTIONS} />
    </Stack>
  );
}
