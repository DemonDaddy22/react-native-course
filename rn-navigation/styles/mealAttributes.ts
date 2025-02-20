import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  content: ViewStyle;
  contentGroup: ViewStyle;
  contentText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 8,
  },
  contentGroup: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.GREY_2,
  },
});

export default styles;
