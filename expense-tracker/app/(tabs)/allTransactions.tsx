import Screen from '@/components/Screen';
import ExpensesList from '@/components/ExpensesList';
import { useContext } from 'react';
import { TransactionsContext } from '@/store/transactionsContext';

interface IProps {}

const AllTransactions: React.FC<IProps> = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Screen>
      <ExpensesList expenses={transactions} />
    </Screen>
  );
};

export default AllTransactions;
