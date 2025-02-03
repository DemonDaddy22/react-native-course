import { COLORS } from '@/constants/colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  box: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  box: {
    flex: 1,
    aspectRatio: 1,
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0.25,
      height: 0.5,
    },
    shadowRadius: 4,
  },
});

export default styles;
