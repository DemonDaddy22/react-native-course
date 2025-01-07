import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  goal: IGoal;
  index: number;
  onPress: (id: number) => void;
}

const Goal: React.FC<Props> = ({ goal, index, onPress }) => {
  const goalBackgroundColor = index % 2 === 0 ? '#fbede3' : '#fef8f8';

  const handleGoalPress = () => {
    onPress(goal.id);
  };

  return (
    <Pressable onPress={handleGoalPress} style={({ pressed }) => pressed && styles.buttonPress}>
      <View style={[styles.goal, { backgroundColor: goalBackgroundColor }]}>
        <Text style={styles.text}>{goal.goal}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goal: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  text: {
    color: '#290210',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonPress: {
    opacity: 0.6,
  },
});

export default Goal;
