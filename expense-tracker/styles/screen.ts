import { COLORS } from '@/constants/colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  screen: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  screen: {
    flex: 1,
    backgroundColor: COLORS.ACCENT_3,
  },
});

export default styles;
