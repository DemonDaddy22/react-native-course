import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  handleButtonPress: (text: string) => void;
}

const GoalInput: React.FC<Props> = ({ handleButtonPress }) => {
  const [goal, setGoal] = useState<string>('');

  const handleTextChange = (text: string) => {
    setGoal(text);
  };

  const handleAddGoal = () => {
    handleButtonPress(goal);
    setGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Enter your goal...' onChangeText={handleTextChange} value={goal} />
      <Button title='Add Goal' color='#f6c29a' onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    flex: 1,
    backgroundColor: '#290210',
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#f6c29a',
    padding: 4,
    color: '#f6c29a',
    flex: 1,
  },
});

export default GoalInput;
