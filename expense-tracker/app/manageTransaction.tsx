import ExpenseForm from '@/components/ExpenseForm';
import Screen from '@/components/Screen';
import Button from '@/components/UI/Button';
import { TransactionsContext } from '@/store/transactionsContext';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useContext, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IProps {}

const ManageTransaction: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams() ?? {};
  const isNewExpense = !id;

  const { addTransaction, deleteTransaction } = useContext(TransactionsContext);

  useLayoutEffect(() => {
    const title = isNewExpense ? 'Add Expense' : 'Edit Expense';
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  const handleAddTransaction = () => {
    addTransaction({ title: 'Update modal', date: new Date(), amount: 10 });
    navigation.goBack();
  };

  const handleUpdateTransaction = () => {};

  const handleDeleteTransaction = () => {
    deleteTransaction(Number(id));
    navigation.goBack();
  };

  return (
    <Screen>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ExpenseForm />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button title='Add' onPress={handleAddTransaction} />
          <Button title='Delete' onPress={handleDeleteTransaction} />
        </View>
      </GestureHandlerRootView>
    </Screen>
  );
};

export default ManageTransaction;
