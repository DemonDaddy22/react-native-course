import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  inputContainer: ViewStyle;
  label: TextStyle;
  input: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  inputContainer: {
    gap: 6,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '500',
    color: COLORS.WHITE,
  },
  input: {
    borderRadius: 8,
    backgroundColor: COLORS.ACCENT_3_2,
    color: COLORS.WHITE,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.ACCENT_4_2,
  },
});

export default styles;
