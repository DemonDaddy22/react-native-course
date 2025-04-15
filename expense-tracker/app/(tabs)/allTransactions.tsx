import Screen from '@/components/Screen';
import ExpensesList from '@/components/ExpensesList';
import { ALL_TRANSACTIONS } from '@/data/dummy';

interface IProps {}

const AllTransactions: React.FC<IProps> = () => {
  return (
    <Screen>
      <ExpensesList expenses={ALL_TRANSACTIONS} />
    </Screen>
  );
};

export default AllTransactions;
