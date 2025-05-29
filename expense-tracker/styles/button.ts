import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  button: ViewStyle;
  buttonPrimary: ViewStyle;
  buttonSecondary: ViewStyle;
  buttonTertiary: ViewStyle;
  buttonOutlinePrimary: ViewStyle;
  buttonOutlineSecondary: ViewStyle;
  buttonOutlineTertiary: ViewStyle;
  buttonOutlineRed: ViewStyle;
  title: TextStyle;
  titlePrimary: TextStyle;
  titleSecondary: TextStyle;
  titleTertiary: TextStyle;
  titleBlack: TextStyle;
  titleRed: TextStyle;
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
  buttonOutlinePrimary: {
    borderColor: COLORS.ACCENT_1,
    borderWidth: 1,
  },
  buttonOutlineSecondary: {
    borderColor: COLORS.ACCENT_2,
    borderWidth: 1,
  },
  buttonOutlineTertiary: {
    borderColor: COLORS.ACCENT_5,
    borderWidth: 1,
  },
  buttonOutlineRed: {
    borderColor: COLORS.ACCENT_6,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
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
  titleRed: {
    color: COLORS.ACCENT_6,
  },
});

export default styles;
