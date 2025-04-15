import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  summary: ViewStyle;
  item: ViewStyle;
  itemTitle: TextStyle;
  itemValue: TextStyle;
  divider: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  summary: {
    padding: 12,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.ACCENT_3_2,
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
    color: COLORS.LIGHT_1,
  },
  itemValue: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.ACCENT_1,
  },
  divider: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.ACCENT_4_1,
  },
});

export default styles;
