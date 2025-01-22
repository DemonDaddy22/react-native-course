import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  guessContainer: ViewStyle;
  guess: TextStyle;
  gameButtons: ViewStyle;
  buttonText: TextStyle;
  header: TextStyle;
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
  gameButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  header: {
    color: COLORS.LIGHT,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default styles;
