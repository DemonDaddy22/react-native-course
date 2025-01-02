import { SafeAreaView } from 'react-native';
import GoalList from '@/components/GoalList';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoalList />
    </SafeAreaView>
  );
}
