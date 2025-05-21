import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  button: ViewStyle;
  buttonPrimary: ViewStyle;
  buttonSecondary: ViewStyle;
  buttonTertiary: ViewStyle;
  title: TextStyle;
  titlePrimary: TextStyle;
  titleSecondary: TextStyle;
  titleTertiary: TextStyle;
  titleBlack: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: COLORS.ACCENT_1,
  },
  buttonSecondary: {
    backgroundColor: COLORS.ACCENT_2,
  },
  buttonTertiary: {
    backgroundColor: COLORS.ACCENT_5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  titlePrimary: {
    color: COLORS.ACCENT_1,
  },
  titleSecondary: {
    color: COLORS.ACCENT_2,
  },
  titleTertiary: {
    color: COLORS.ACCENT_5,
  },
  titleBlack: {
    color: COLORS.BLACK,
  },
});

export default styles;
