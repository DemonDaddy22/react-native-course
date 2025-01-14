import { View } from 'react-native';
import Button from '@/components/Button';
import LinearGradientScreen from '@/components/LinearGradientScreen';
import NumberInput from '@/components/NumberInput';

interface IProps {}

const GameStart: React.FC<IProps> = () => {
  return (
    <LinearGradientScreen>
      <NumberInput variant='accent2' />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Button title='Play Game' onPress={() => {}} variant='accent1' />
        <Button title='Reset' onPress={() => {}} variant='accent3' />
      </View>
    </LinearGradientScreen>
  );
};

export default GameStart;
