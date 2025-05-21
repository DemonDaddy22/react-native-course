import Screen from '@/components/Screen';
import Button from '@/components/UI/Button';
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
      <Button title='Manage' onPress={() => {}} />
    </Screen>
  );
};

export default ManageTransaction;
