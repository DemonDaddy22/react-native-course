import { Text } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';

interface IProps {}

const Game: React.FC<IProps> = () => {
  return (
    <LinearGradientScreen>
      <Text>Game</Text>
    </LinearGradientScreen>
  );
};

export default Game;
