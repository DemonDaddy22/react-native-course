import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Goals',
          headerStyle: { backgroundColor: '#290210' },
          headerTitleStyle: { color: '#f6c29a' },
        }}
      />
    </Stack>
  );
}
