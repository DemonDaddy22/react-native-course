import Screen from '@/components/Screen';
import { Text } from 'react-native';

interface IProps {}

const RecentTransactions: React.FC<IProps> = () => {
  return (
    <Screen>
      <Text>Recent Transactions</Text>
    </Screen>
  );
};

export default RecentTransactions;
