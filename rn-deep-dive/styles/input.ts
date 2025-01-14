import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle } from 'react-native';

interface IStyles {
  input: TextStyle;
  inputAccent1: TextStyle;
  inputAccent2: TextStyle;
  inputAccent3: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  input: {
    textAlign: 'center',
    fontSize: 80,
    height: 100,
    fontWeight: 'bold',
    padding: 4,
    borderBottomWidth: 4,
    borderBlockColor: COLORS.LIGHT,
    borderRadius: 2,
    color: COLORS.LIGHT,
    width: '100%',
  },
  inputAccent1: {
    borderBlockColor: COLORS.ACCENT_1,
    color: COLORS.ACCENT_1,
  },
  inputAccent2: {
    borderBlockColor: COLORS.ACCENT_2,
    color: COLORS.ACCENT_2,
  },
  inputAccent3: {
    borderBlockColor: COLORS.ACCENT_3,
    color: COLORS.ACCENT_3,
  },
});

export default styles;
