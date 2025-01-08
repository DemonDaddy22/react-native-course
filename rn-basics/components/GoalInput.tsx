import { COLORS } from '@/constants/colors';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Modal, Image } from 'react-native';
import GoalInputButton from './GoalInputButton';

interface Props {
  visible: boolean;
  handleButtonPress: (text: string) => void;
  handleCloseModal: () => void;
}

const GoalInput: React.FC<Props> = ({ visible, handleButtonPress, handleCloseModal }) => {
  const [goal, setGoal] = useState<string>('');

  const handleTextChange = (text: string) => {
    setGoal(text);
  };

  const handleAddGoal = () => {
    handleButtonPress(goal);
    setGoal('');
    handleCloseModal();
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goals.png')} style={styles.image} resizeMode='contain' />
        <TextInput style={styles.input} placeholder='Enter your goal...' onChangeText={handleTextChange} value={goal} />
        <View style={styles.buttonContainer}>
          <GoalInputButton title='Add Goal' color={COLORS.ACCENT_1} onPress={handleAddGoal} />
          <GoalInputButton title='Cancel' color={COLORS.ACCENT_2} onPress={handleCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: COLORS.GREY_1,
    padding: 16,
  },
  input: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: COLORS.ACCENT_3,
    padding: 4,
    color: COLORS.ACCENT_3,
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    height: 100,
    aspectRatio: 1,
    marginBottom: 60,
  },
});

export default GoalInput;
