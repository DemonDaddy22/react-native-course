import { Text } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';

interface IProps {}

const GameOver: React.FC<IProps> = () => {
  return (
    <LinearGradientScreen>
      <Text>Game Over</Text>
    </LinearGradientScreen>
  );
};

export default GameOver;
