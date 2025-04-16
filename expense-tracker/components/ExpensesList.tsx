import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';
import styles from '@/styles/expenseList';

interface IProps {
  expenses: IExpense[];
}

const ExpensesList: React.FC<IProps> = ({ expenses }) => {
  return (
    <FlatList
      style={styles.list}
      data={expenses}
      keyExtractor={item => String(item.id)}
      renderItem={itemData => <ExpenseItem data={itemData.item} />}
    />
  );
};

export default ExpensesList;
