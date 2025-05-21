import styles from '@/styles/button';
import { useMemo } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

type TButton = 'primary' | 'secondary' | 'tertiary';

interface IProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  type?: TButton;
}

const Button: React.FC<IProps> = ({ title, style, titleStyle, type = 'primary', onPress, ...restProps }) => {
  const buttonTypeStyle = useMemo(() => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      case 'tertiary':
        return styles.buttonTertiary;
      default:
        return styles.buttonPrimary;
    }
  }, [type]);

  const buttonTextStyle = useMemo(() => {
    switch (type) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
      default:
        return styles.titleBlack;
    }
  }, [type]);

  return (
    <TouchableOpacity {...restProps} onPress={onPress} style={[styles.button, buttonTypeStyle, style]}>
      <Text style={[styles.title, buttonTextStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
