import { useState } from 'react';
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import Goal from './Goal';
import GoalInput from './GoalInput';
import { COLORS } from '@/constants/colors';

interface Props {}

const GoalList: React.FC<Props> = () => {
  const [goals, setGoals] = useState<IGoal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddGoal = (goal: string) => {
    if (!goal.trim().length) {
      return;
    }
    setGoals(prevGoals => [...prevGoals, { id: Date.now(), goal }]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  };

  const renderGoalItem = (itemData: ListRenderItemInfo<IGoal>) => {
    return <Goal goal={itemData.item} index={itemData.index} onPress={handleDeleteGoal} />;
  };

  const openInputModal = () => {
    setModalVisible(true);
  };

  const closeInputModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <GoalInput visible={modalVisible} handleButtonPress={handleAddGoal} handleCloseModal={closeInputModal} />
      <View style={styles.goalsContainer}>
        {goals.length ? (
          <FlatList data={goals} renderItem={renderGoalItem} keyExtractor={item => String(item.id)} />
        ) : (
          <Text style={styles.placeholder}>Add some goals to get started :)</Text>
        )}
      </View>
      <Pressable style={({ pressed }) => [styles.addButton, pressed && styles.pressedButton]} onPress={openInputModal}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK,
  },
  goalsContainer: {
    flex: 6,
  },
  placeholder: {
    color: COLORS.ACCENT_3,
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
  addButton: {
    borderRadius: 50,
    width: 60,
    height: 60,
    zIndex: 1,
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    backgroundColor: COLORS.ACCENT_3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: COLORS.DARK,
    marginTop: -2,
  },
  pressedButton: {
    opacity: 0.75,
  },
});

export default GoalList;
