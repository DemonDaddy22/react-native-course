import Screen from '@/components/Screen';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { View } from 'react-native';

interface IProps {}

const ManageTransaction: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams() ?? {};
  const isNewExpense = !id;

  useLayoutEffect(() => {
    const title = isNewExpense ? 'Add Expense' : 'Edit Expense';
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  return (
    <Screen>
      <View />
    </Screen>
  );
};

export default ManageTransaction;
