import { COLORS } from '@/constants/Colors';
import { Stack } from 'expo-router';

const SCREEN_OPTIONS = {
  title: '',
  headerStyle: { backgroundColor: COLORS.DARK },
  statusBarBackgroundColor: COLORS.DARK,
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={SCREEN_OPTIONS} />
      <Stack.Screen name='game' options={SCREEN_OPTIONS} />
      <Stack.Screen name='game-over' options={SCREEN_OPTIONS} />
    </Stack>
  );
}
