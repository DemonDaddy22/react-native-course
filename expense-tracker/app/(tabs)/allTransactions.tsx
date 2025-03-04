import { View } from 'react-native';
import ExpenseItem from '@/components/ExpenseItem';
import Screen from '@/components/Screen';

interface IProps {}

const AllTransactions: React.FC<IProps> = () => {
  return (
    <Screen>
      <View style={{ gap: 8, padding: 16 }}>
        <ExpenseItem data={{ title: 'Expense 1' }} />
        <ExpenseItem data={{ title: 'Expense 2' }} />
        <ExpenseItem data={{ title: 'Expense 3' }} />
        <ExpenseItem data={{ title: 'Expense 4' }} />
        <ExpenseItem data={{ title: 'Expense 5' }} />
      </View>
    </Screen>
  );
};

export default AllTransactions;
