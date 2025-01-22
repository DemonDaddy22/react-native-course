import styles from '@/styles/button';
import { useMemo } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

interface IProps extends PressableProps {
  variant?: TVariant;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, variant = 'accent1', onPress }) => {
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

  return children ? (
    <Pressable style={({ pressed }) => pressed && { transform: [{ scale: 0.97 }] }} onPress={onPress}>
      <View style={[styles.button, buttonVariant]}>{children}</View>
    </Pressable>
  ) : null;
};

export default Button;
