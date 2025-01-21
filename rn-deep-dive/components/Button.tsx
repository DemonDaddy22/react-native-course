import styles from '@/styles/button';
import { useMemo } from 'react';
import { Pressable, PressableProps, StyleProp, Text, TextStyle, View } from 'react-native';

interface IProps extends PressableProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  variant?: TVariant;
}

const Button: React.FC<IProps> = ({ title, textStyle, variant = 'accent1', onPress }) => {
  const buttonVariant = useMemo(() => {
    switch (variant) {
      case 'accent2':
        return styles.buttonAccent2;
      case 'accent3':
        return styles.buttonAccent3;
      case 'accent1':
      default:
        return styles.buttonAccent1;
    }
  }, [variant]);

  return title ? (
    <Pressable style={({ pressed }) => pressed && { transform: [{ scale: 0.97 }] }} onPress={onPress}>
      <View style={[styles.button, buttonVariant]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  ) : null;
};

export default Button;
