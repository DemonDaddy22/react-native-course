import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  heading: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  heading: {
    color: COLORS.LIGHT,
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});

export default styles;
