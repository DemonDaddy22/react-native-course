import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  list: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 32,
    alignSelf: 'stretch',
  },
  list: {
    gap: 16,
  },
});

export default styles;
