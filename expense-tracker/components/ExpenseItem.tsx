import styles from '@/styles/expenseItem';
import { Text, View } from 'react-native';

interface IProps {
  data: IExpense;
}

const ExpenseItem: React.FC<IProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

export default ExpenseItem;
