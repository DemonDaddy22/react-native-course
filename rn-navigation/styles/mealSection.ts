import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  section: ViewStyle;
  title: TextStyle;
  content: ViewStyle;
  item: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  section: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    gap: 8,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
  },
  content: {
    gap: 2,
  },
  item: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default styles;
