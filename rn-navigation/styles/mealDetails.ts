import { COLORS } from '@/constants/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  image: ImageStyle;
  title: TextStyle;
  divider: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  title: {
    margin: 8,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.GREY_4,
    margin: 16,
  },
});

export default styles;
