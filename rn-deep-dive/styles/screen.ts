import { COLORS } from '@/constants/Colors';
import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  screen: ViewStyle;
  footerImages: ViewStyle;
  footerImage: ImageStyle;
  footerImage1: ImageStyle;
  footerImage3: ImageStyle;
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
  footerImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
  },
  footerImage: {
    width: 400,
    height: 400,
    position: 'absolute',
    opacity: 0.9,
  },
  footerImage1: {
    left: -100,
  },
  footerImage3: {
    left: -300,
  },
});

export default styles;
