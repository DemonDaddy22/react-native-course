import styles from '@/styles/screen';
import { Text, View } from 'react-native';

interface IProps {}

const GameOver: React.FC<IProps> = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
    </View>
  );
};

export default GameOver;
