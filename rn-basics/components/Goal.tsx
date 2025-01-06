import { StyleSheet, Text, View } from 'react-native';

interface Props {
  goal: string;
  index: number;
}

const Goal: React.FC<Props> = ({ goal, index }) => {
  const goalBackgroundColor = index % 2 === 0 ? '#fbede3' : '#fef8f8';

  return (
    <View style={[styles.goal, { backgroundColor: goalBackgroundColor }]}>
      <Text style={styles.text}>{goal}</Text>
    </View>
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
});

export default Goal;
