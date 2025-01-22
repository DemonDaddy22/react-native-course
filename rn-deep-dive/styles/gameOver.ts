import { COLORS } from '@/constants/Colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  heading: TextStyle;
  title: TextStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  heading: {
    color: COLORS.LIGHT,
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default styles;
