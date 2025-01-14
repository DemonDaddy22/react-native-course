import Button from '@/components/Button';
import NumberInput from '@/components/NumberInput';
import styles from '@/styles/screen';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native';

interface IProps {}

const GameStart: React.FC<IProps> = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.screen}>
          <NumberInput variant='accent2' />
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button title='Play Game' onPress={() => {}} variant='accent1' />
            <Button title='Reset' onPress={() => {}} variant='accent3' />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default GameStart;
