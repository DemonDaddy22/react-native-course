import { Alert, Text, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import Title from '@/components/Title';
import { generateRandomNumber } from '@/utils';
import styles from '@/styles/game';
import Button from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';

interface IProps {}

type RouteParams = {
  params: {
    initialNum: string;
  };
};

const Game: React.FC<IProps> = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const {
    params: { initialNum: enteredNumber },
  } = route;

  const initialNum = useRef(parseInt(enteredNumber)).current;
  const lowerBound = useRef(1);
  const upperBound = useRef(100);

  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomNumber(lowerBound.current, upperBound.current, initialNum)
  );
  const [turns, setTurns] = useState(0);

  const handleButtonPress = (goHigher: boolean) => {
    if ((goHigher && currentGuess > initialNum) || (!goHigher && currentGuess < initialNum)) {
      Alert.alert('Wrong guess', 'You are cheating!', [{ text: 'Sorry!', style: 'destructive' }]);
      return;
    }

    if (goHigher) {
      lowerBound.current = currentGuess + 1;
    } else {
      upperBound.current = currentGuess;
    }

    setTurns(prevTurns => prevTurns + 1);
    setCurrentGuess(generateRandomNumber(lowerBound.current, upperBound.current, currentGuess));
  };

  useEffect(() => {
    if (currentGuess === initialNum) {
      navigation.navigate('game-over', { guess: currentGuess, turns });
    }
  }, [currentGuess, initialNum, turns]);

  return (
    <LinearGradientScreen>
      <Title>Opponent's guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{currentGuess}</Text>
      </View>
      <Text style={styles.header}>Guess higher or lower?</Text>
      <View style={styles.gameButtons}>
        <Button onPress={() => handleButtonPress(false)}>
          <Ionicons name='arrow-down-outline' size={24} color={COLORS.DARK} />
        </Button>
        <Button onPress={() => handleButtonPress(true)}>
          <Ionicons name='arrow-up-outline' size={24} color={COLORS.DARK} />
        </Button>
      </View>
    </LinearGradientScreen>
  );
};

export default Game;
