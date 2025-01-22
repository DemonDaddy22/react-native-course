import { Text } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import Title from '@/components/Title';
import styles from '@/styles/gameOver';
import Button from '@/components/Button';

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
  const navigation = useNavigation<any>();

  const handleGameRestart = () => {
    navigation.navigate('index');
  };

  return (
    <LinearGradientScreen>
      <Text style={styles.heading}>You won! The number was</Text>
      <Title style={styles.title}>{guess}</Title>
      <Button onPress={handleGameRestart}>
        <Text style={styles.buttonText}>Restart</Text>
      </Button>
    </LinearGradientScreen>
  );
};

export default GameOver;
