import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {}

interface IGoal {
  id: number;
  goal: string;
}

const GoalList: React.FC<Props> = () => {
  const [goal, setGoal] = useState<string>('');
  const [goals, setGoals] = useState<IGoal[]>([]);

  const handleTextChange = (text: string) => {
    setGoal(text);
  };

  const handleAddGoal = () => {
    if (!goal.trim().length) {
      return;
    }
    setGoals(prevGoals => [...prevGoals, { id: Date.now(), goal }]);
    setGoal('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter your goal...' onChangeText={handleTextChange} />
        <Button title='Add Goal' color='#f6c29a' onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  goalsContainer: {
    flex: 6,
    padding: 16,
  },
});

export default GoalList;
