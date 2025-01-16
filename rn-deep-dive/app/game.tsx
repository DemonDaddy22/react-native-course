import { Text } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import Title from '@/components/Title';

interface IProps {}

const Game: React.FC<IProps> = () => {
  return (
    <LinearGradientScreen>
      <Title>Opponent's guess</Title>
    </LinearGradientScreen>
  );
};

export default Game;
