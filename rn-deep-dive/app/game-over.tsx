import { Text } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import Title from '@/components/Title';
import styles from '@/styles/gameOver';

interface IProps {}

type RouteParams = {
  params: {
    guess: string;
  };
};

const GameOver: React.FC<IProps> = () => {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const {
    params: { guess },
  } = route;

  return (
    <LinearGradientScreen>
      <Text style={styles.heading}>You won! The number was</Text>
      <Title style={styles.title}>{guess}</Title>
    </LinearGradientScreen>
  );
};

export default GameOver;
