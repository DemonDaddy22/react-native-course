import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  list: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  list: {
    gap: 16,
    padding: 16,
  },
});

export default styles;
