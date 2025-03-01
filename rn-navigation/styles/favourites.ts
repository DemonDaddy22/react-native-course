import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '@/constants/colors';

interface IStyles {
  placeholder: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  placeholder: {
    textAlign: 'center',
    margin: 16,
    color: COLORS.DARK,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 500,
  },
});

export default styles;
