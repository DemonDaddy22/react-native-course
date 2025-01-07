import { Button, StyleSheet, TextInput } from 'react-native';

interface Props {
  goal: string;
  handleTextChange: (text: string) => void;
  handleButtonPress: () => void;
}

const GoalInput: React.FC<Props> = ({ goal, handleTextChange, handleButtonPress }) => {
  return (
    <>
      <TextInput style={styles.input} placeholder='Enter your goal...' onChangeText={handleTextChange} value={goal} />
      <Button title='Add Goal' color='#f6c29a' onPress={handleButtonPress} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#f6c29a',
    padding: 4,
    color: '#f6c29a',
    flex: 1,
  },
});

export default GoalInput;
