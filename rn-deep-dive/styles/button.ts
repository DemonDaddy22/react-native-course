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
    paddingHorizontal: 24,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHT,
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
