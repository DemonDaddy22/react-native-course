import { COLORS } from '@/constants/Colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  screen: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: COLORS.DARK,
  },
});

export default styles;
