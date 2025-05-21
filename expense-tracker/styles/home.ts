import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  home: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  home: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 40,
    fontWeight: '700',
    color: COLORS.ACCENT_5,
    paddingTop: 4,
    paddingBlock: 16,
  },
});

export default styles;
