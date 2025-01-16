import { Alert, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import Button from '@/components/Button';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import NumberInput from '@/components/NumberInput';
import styles from '@/styles/startGame';

interface IProps {}

const GameStart: React.FC<IProps> = () => {
  const [numberEntered, setNumberEntered] = useState('');

  const handleNumberChange = (num: string) => {
    setNumberEntered(num);
  };

  const handleResetNumber = () => {
    setNumberEntered('');
  };

  const handleConfirm = () => {
    const parsedNum = parseInt(numberEntered);
    if (isNaN(parsedNum) || parsedNum <= 0 || parsedNum > 99) {
      Alert.alert('Invalid number', 'Please enter a number between 1 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: handleResetNumber,
        },
      ]);
      return;
    }
    router.navigate('/game');
  };

  return (
    <LinearGradientScreen>
      <Text style={styles.heading}>Enter a number between 1 and 99</Text>
      <NumberInput value={numberEntered} variant='accent2' onChangeText={handleNumberChange} />
      <View style={styles.buttonsContainer}>
        <Button title='Confirm' onPress={handleConfirm} variant='accent1' />
        <Button title='Reset' onPress={handleResetNumber} variant='accent3' />
      </View>
    </LinearGradientScreen>
  );
};

export default GameStart;
