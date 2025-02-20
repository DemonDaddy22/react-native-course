import { COLORS } from '@/constants/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  cardPressed: ViewStyle;
  box: ViewStyle;
  card: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  cardPressed: {
    transform: [
      {
        scale: 0.99,
      },
    ],
  },
  box: {
    flex: 1,
    backgroundColor: COLORS.LIGHT,
    margin: 4,
    borderRadius: 8,
    elevation: 1,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.DARK,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
  },
});

export default styles;
