import { COLORS } from '@/constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  box: ViewStyle;
  outerContainer: ViewStyle;
  innerContainer: ViewStyle;
  containerPressed: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  box: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
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
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPressed: {
    transform: [
      {
        scale: 0.95,
      },
    ],
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 20,
    color: COLORS.DARK,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
  },
});

export default styles;
