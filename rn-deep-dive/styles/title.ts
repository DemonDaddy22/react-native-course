import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle } from 'react-native';

interface IStyles {
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: COLORS.ACCENT_2,
  },
});

export default styles;
