import { COLORS } from '@/constants/colors';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: '',
          headerStyle: { backgroundColor: COLORS.DARK },
          statusBarBackgroundColor: COLORS.DARK,
        }}
      />
    </Stack>
  );
}
