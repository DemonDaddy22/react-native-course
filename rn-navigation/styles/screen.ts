import { COLORS } from '@/constants/colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  screen: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: COLORS.LIGHT,
  },
});

export default styles;
