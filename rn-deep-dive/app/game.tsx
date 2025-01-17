import { Text, View } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import Title from '@/components/Title';
import { useState } from 'react';
import { generateRandomNumber } from '@/utils';
import { useRoute, RouteProp } from '@react-navigation/native';
import styles from '@/styles/game';

interface IProps {}

type RouteParams = {
  params: {
    initialNum: number;
  };
};

const Game: React.FC<IProps> = () => {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const {
    params: { initialNum },
  } = route;

  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, initialNum));

  return (
    <LinearGradientScreen>
      <Title>Opponent's guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{currentGuess}</Text>
      </View>
    </LinearGradientScreen>
  );
};

export default Game;
