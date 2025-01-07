import { useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import Goal from './Goal';
import GoalInput from './GoalInput';

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

  const renderGoalItem = (itemData: ListRenderItemInfo<IGoal>) => {
    return <Goal goal={itemData.item.goal} index={itemData.index} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <GoalInput goal={goal} handleTextChange={handleTextChange} handleButtonPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.length ? (
          <FlatList data={goals} renderItem={renderGoalItem} keyExtractor={item => String(item.id)} />
        ) : (
          <Text style={styles.placeholder}>Add some goals to get started :)</Text>
        )}
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
  goalsContainer: {
    flex: 6,
  },
  placeholder: {
    color: '#290210',
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
  },
});

export default GoalList;
