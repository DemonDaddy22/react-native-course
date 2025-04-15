import { StyleSheet, ViewStyle } from 'react-native';

interface IStyles {
  list: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  list: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});

export default styles;
