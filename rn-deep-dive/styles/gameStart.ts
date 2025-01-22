import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  heading: TextStyle;
  buttonsContainer: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  heading: {
    color: COLORS.GREY_2,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
});

export default styles;
