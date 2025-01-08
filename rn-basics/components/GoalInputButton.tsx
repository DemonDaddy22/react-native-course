import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface Props extends PressableProps {
  title: string;
  color: string;
}

const GoalInputButton: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, { borderColor: color }, pressed && styles.pressed]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default GoalInputButton;
