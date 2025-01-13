import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='game-start' />
      <Stack.Screen name='game' />
      <Stack.Screen name='game-over' />
    </Stack>
  );
}
