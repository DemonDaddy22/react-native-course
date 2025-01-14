import styles from '@/styles/screen';
import { Text, View } from 'react-native';

interface IProps {}

const Game: React.FC<IProps> = () => {
  return (
    <View style={styles.screen}>
      <Text>Game</Text>
    </View>
  );
};

export default Game;
