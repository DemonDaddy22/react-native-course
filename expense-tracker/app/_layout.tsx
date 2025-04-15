import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='manageTransaction' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
