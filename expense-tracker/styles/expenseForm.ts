import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  formContainer: ViewStyle;
  formRow: ViewStyle;
  buttonsRow: ViewStyle;
  button: ViewStyle;
  descriptionInput: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  formContainer: {
    padding: 16,
    gap: 16,
    flex: 1,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  buttonsRow: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    flex: 1,
  },
  descriptionInput: {
    minHeight: 120,
  },
});

export default styles;
