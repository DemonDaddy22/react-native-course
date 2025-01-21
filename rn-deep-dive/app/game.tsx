import { Alert, Text, View } from 'react-native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import Title from '@/components/Title';
import { useRef, useState } from 'react';
import { generateRandomNumber } from '@/utils';
import { useRoute, RouteProp } from '@react-navigation/native';
import styles from '@/styles/game';
import Button from '@/components/Button';

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

  const lowerBound = useRef(1);
  const upperBound = useRef(100);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(lowerBound.current, upperBound.current, initialNum)
  );

  const handleButtonPress = (goHigher: boolean) => {
    if ((goHigher && currentGuess > initialNum) || (!goHigher && currentGuess < initialNum)) {
      Alert.alert('Wrong guess', 'You are cheating!', [{ text: 'Sorry!', style: 'destructive' }]);
      return;
    }

    if (goHigher) {
      lowerBound.current = currentGuess;
    } else {
      upperBound.current = currentGuess;
    }

    setCurrentGuess(generateRandomNumber(lowerBound.current, upperBound.current, currentGuess));
  };

  return (
    <LinearGradientScreen>
      <Title>Opponent's guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{currentGuess}</Text>
      </View>
      <View style={styles.gameButtons}>
        <Button title='-' onPress={() => handleButtonPress(false)} />
        <Button title='+' onPress={() => handleButtonPress(true)} />
      </View>
    </LinearGradientScreen>
  );
};

export default Game;
