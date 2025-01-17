import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  guessContainer: ViewStyle;
  guess: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  guessContainer: {
    borderWidth: 4,
    borderColor: COLORS.ACCENT_3,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  guess: {
    color: COLORS.ACCENT_3,
    fontSize: 80,
    fontWeight: 'bold',
  },
});

export default styles;
