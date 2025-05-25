import ExpensesList from '@/components/ExpensesList';
import Screen from '@/components/Screen';
import { TransactionsContext } from '@/store/transactionsContext';
import { useContext } from 'react';

interface IProps {}

const RecentTransactions: React.FC<IProps> = () => {
  const { transactions } = useContext(TransactionsContext);

  const recentTransactions = transactions.slice(0, 5);

  return (
    <Screen>
      <ExpensesList expenses={recentTransactions} />
    </Screen>
  );
};

export default RecentTransactions;
