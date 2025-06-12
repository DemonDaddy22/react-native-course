import ExpenseForm from '@/components/ExpenseForm';
import Screen from '@/components/Screen';
import { TransactionsContext } from '@/store/transactionsContext';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useContext, useLayoutEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IProps {}

const ManageTransaction: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams() ?? {};
  const isNewExpense = !id;

  const { addTransaction, updateTransaction, deleteTransaction, transactions } = useContext(TransactionsContext);

  const expenseItem = transactions.find(item => item.id === Number(id));

  useLayoutEffect(() => {
    const title = isNewExpense ? 'Add Expense' : 'Edit Expense';
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  const handleUpdateTransaction = (data: Partial<IExpense>) => {
    if (isNewExpense) {
      addTransaction(data);
    } else {
      updateTransaction(Number(id), data);
    }
  };

  const handleDeleteTransaction = () => {
    deleteTransaction(Number(id));
  };

  return (
    <Screen>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ExpenseForm
          isNewExpense={isNewExpense}
          expenseData={expenseItem}
          onCancel={navigation.goBack}
          onSubmit={handleUpdateTransaction}
          onDelete={handleDeleteTransaction}
        />
      </GestureHandlerRootView>
    </Screen>
  );
};

export default ManageTransaction;
