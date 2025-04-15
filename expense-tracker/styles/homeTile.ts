import { COLORS } from '@/constants/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  tile: ViewStyle;
  background: ViewStyle;
  backgroundImage: ImageStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  tile: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.DARK_2,
    height: 200,
    overflow: 'hidden',
    marginVertical: 4,
  },
  background: {
    padding: 12,
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.75,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.LIGHT_3,
  },
});

export default styles;
