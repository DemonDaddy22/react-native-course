import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  formContainer: ViewStyle;
  formRow: ViewStyle;
  descriptionInput: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  formContainer: {
    padding: 16,
    gap: 16,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  descriptionInput: {
    minHeight: 120,
  },
});

export default styles;
