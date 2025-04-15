import ExpensesList from '@/components/ExpensesList';
import Screen from '@/components/Screen';
import { ALL_TRANSACTIONS } from '@/data/dummy';

interface IProps {}

const RecentTransactions: React.FC<IProps> = () => {
  return (
    <Screen>
      <ExpensesList expenses={ALL_TRANSACTIONS.slice(0, 4)} />
    </Screen>
  );
};

export default RecentTransactions;
