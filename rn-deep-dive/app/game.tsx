import { Alert, Text, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import Title from '@/components/Title';
import { generateRandomNumber } from '@/utils';
import styles from '@/styles/game';
import Button from '@/components/Button';

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

    setCurrentGuess(generateRandomNumber(lowerBound.current, upperBound.current, currentGuess));
  };

  useEffect(() => {
    if (currentGuess === initialNum) {
      navigation.navigate('game-over', { guess: currentGuess });
    }
  }, [currentGuess, initialNum]);

  return (
    <LinearGradientScreen>
      <Title>Opponent's guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{currentGuess}</Text>
      </View>
      <View style={styles.gameButtons}>
        <Button title='-' textStyle={styles.buttonText} onPress={() => handleButtonPress(false)} />
        <Button title='+' textStyle={styles.buttonText} onPress={() => handleButtonPress(true)} />
      </View>
    </LinearGradientScreen>
  );
};

export default Game;
