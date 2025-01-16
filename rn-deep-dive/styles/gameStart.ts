import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  heading: TextStyle;
  buttonsContainer: ViewStyle;
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
});

export default styles;
