import { COLORS } from '@/constants/colors';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  goal: IGoal;
  index: number;
  onPress: (id: number) => void;
}

const Goal: React.FC<Props> = ({ goal, index, onPress }) => {
  const color = index % 2 === 0 ? COLORS.ACCENT_1 : COLORS.ACCENT_2;

  const handleGoalPress = () => {
    onPress(goal.id);
  };

  return (
    <Pressable onPress={handleGoalPress} style={({ pressed }) => pressed && styles.buttonPress}>
      <View style={styles.goal}>
        <Text style={[styles.text, { color }]}>{goal.goal}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goal: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomColor: COLORS.GREY_2,
    borderBottomWidth: 1 / 2,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonPress: {
    opacity: 0.75,
  },
});

export default Goal;
