import styles from '@/styles/summary';
import { Text, View } from 'react-native';

interface IProps {}

const Summary: React.FC<IProps> = () => {
  return (
    <View style={styles.summary}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Lifetime transactions</Text>
        <Text style={styles.itemValue}>45</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Lifetime transactions amount</Text>
        <Text style={styles.itemValue}>₹1289.50</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Transactions in last 7 days</Text>
        <Text style={styles.itemValue}>7</Text>
      </View>
    </View>
  );
};

export default Summary;
