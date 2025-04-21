import styles from '@/styles/expenseItem';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  data: IExpense;
}

const ExpenseItem: React.FC<IProps> = ({ data }) => {
  const router = useRouter();

  const handleItemPress = () => {
    router.push({
      pathname: '/manageTransaction',
      params: { id: data.id },
    });
  };

  return (
    <TouchableOpacity onPress={handleItemPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.meta}>
            <Text style={styles.id}>#{data.id}</Text>
            <Text style={styles.date}>{new Date(data.date).toLocaleDateString()}</Text>
          </View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>₹{data.amount.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem;
