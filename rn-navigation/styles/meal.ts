import { COLORS } from '@/constants/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  box: ViewStyle;
  card: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  content: ViewStyle;
  contentGroup: ViewStyle;
  contentText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
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
