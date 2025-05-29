import styles from '@/styles/button';
import { useMemo } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

type TButton = 'primary' | 'secondary' | 'tertiary' | 'red';

interface IProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  type?: TButton;
}

const BUTTON_STYLES = Object.freeze<{ [key: string]: { [key: string | TButton]: Object } }>({
  DEFAULT: {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    tertiary: styles.buttonTertiary,
  },
  OUTLINE: {
    primary: styles.buttonOutlinePrimary,
    secondary: styles.buttonOutlineSecondary,
    tertiary: styles.buttonOutlineTertiary,
    red: styles.buttonOutlineRed,
  },
});

const BUTTON_TEXT_STYLES = Object.freeze({
  DEFAULT: {
    primary: styles.titlePrimary,
    secondary: styles.titleSecondary,
    tertiary: styles.titleTertiary,
    black: styles.titleBlack,
  },
  OUTLINE: {
    primary: styles.titlePrimary,
    secondary: styles.titleSecondary,
    tertiary: styles.titleTertiary,
    red: styles.titleRed,
  },
});

const Button: React.FC<IProps> = ({ title, style, titleStyle, type = 'primary', onPress, ...restProps }) => {
  const buttonTypeStyle = useMemo(() => {
    return BUTTON_STYLES.DEFAULT[type] || BUTTON_STYLES.DEFAULT.primary;
  }, [type]);

  const buttonTextStyle = useMemo(() => {
    return BUTTON_TEXT_STYLES.DEFAULT.black;
  }, [type]);

  return (
    <TouchableOpacity {...restProps} onPress={onPress} style={[styles.button, buttonTypeStyle, style]}>
      <Text style={[styles.title, buttonTextStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ButtonOutline: React.FC<IProps> = ({
  title,
  style,
  titleStyle,
  type = 'primary',
  onPress,
  ...restProps
}) => {
  const buttonTypeStyle = useMemo(() => {
    return BUTTON_STYLES.OUTLINE[type] || BUTTON_STYLES.OUTLINE.primary;
  }, [type]);

  const buttonTextStyle = useMemo(() => {
    return BUTTON_TEXT_STYLES.OUTLINE[type] || BUTTON_TEXT_STYLES.OUTLINE.primary;
  }, [type]);

  return (
    <TouchableOpacity {...restProps} onPress={onPress} style={[styles.button, buttonTypeStyle, style]}>
      <Text style={[styles.title, buttonTextStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
