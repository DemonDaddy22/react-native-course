import Button from '@/components/Button';
import styles from '@/styles/screen';
import { Text, View } from 'react-native';

interface IProps {}

const GameStart: React.FC<IProps> = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Start</Text>
      <Button title='Play Game' onPress={() => {}} variant='accent1' />
    </View>
  );
};

export default GameStart;
