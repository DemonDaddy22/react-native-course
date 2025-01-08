import { SafeAreaView } from 'react-native';
import GoalList from '@/components/GoalList';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='light' />
      <GoalList />
    </SafeAreaView>
  );
}
