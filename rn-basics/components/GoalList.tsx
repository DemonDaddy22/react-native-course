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
  const [goals, setGoals] = useState<IGoal[]>([]);

  const handleAddGoal = (goal: string) => {
    if (!goal.trim().length) {
      return;
    }
    setGoals(prevGoals => [...prevGoals, { id: Date.now(), goal }]);
  };

  const renderGoalItem = (itemData: ListRenderItemInfo<IGoal>) => {
    return <Goal goal={itemData.item.goal} index={itemData.index} />;
  };

  return (
    <View style={styles.container}>
      <GoalInput handleButtonPress={handleAddGoal} />
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
