import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  content: ViewStyle;
  meta: ViewStyle;
  id: TextStyle;
  date: TextStyle;
  title: TextStyle;
  amountContainer: ViewStyle;
  amount: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    gap: 8,
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: COLORS.ACCENT_3_2,
    minHeight: 60,
    overflow: 'hidden',
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 1,
    gap: 8,
  },
  meta: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  id: {
    fontSize: 12,
    color: COLORS.LIGHT_3,
    opacity: 0.5,
  },
  date: {
    fontSize: 12,
    color: COLORS.ACCENT_5,
  },
  title: {
    color: COLORS.LIGHT_1,
    fontSize: 16,
    fontWeight: '600',
  },
  amountContainer: {
    backgroundColor: COLORS.ACCENT_4_2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  amount: {
    color: COLORS.LIGHT_1,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
