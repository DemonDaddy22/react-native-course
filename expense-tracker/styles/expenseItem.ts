import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.ACCENT_3_2,
  },
  title: {
    color: COLORS.LIGHT_1,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});

export default styles;
