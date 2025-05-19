import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' />
    </View>
  );
}
