import styles from '@/styles/expenseItem';
import { Text, View } from 'react-native';

interface IProps {
  data: IExpense;
}

const ExpenseItem: React.FC<IProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.meta}>
          <Text style={styles.id}>#{data.id}</Text>
          <Text style={styles.date}>{new Date(data.date).toLocaleDateString()}</Text>
        </View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>₹{data.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseItem;
