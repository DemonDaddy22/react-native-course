import { COLORS } from '@/constants/Colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  screen: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK,
  },
});

export default styles;
