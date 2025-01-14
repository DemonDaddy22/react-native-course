import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  button: ViewStyle;
  buttonAccent1: ViewStyle;
  buttonAccent2: ViewStyle;
  buttonAccent3: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHT,
    minWidth: 120,
    elevation: 8,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  buttonAccent1: {
    backgroundColor: COLORS.ACCENT_1,
  },
  buttonAccent2: {
    backgroundColor: COLORS.ACCENT_2,
  },
  buttonAccent3: {
    backgroundColor: COLORS.ACCENT_3,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: COLORS.DARK,
  },
});

export default styles;
