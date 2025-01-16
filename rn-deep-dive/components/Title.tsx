import styles from '@/styles/title';
import { Text, TextProps } from 'react-native';

interface IProps extends TextProps {
  children: React.ReactNode;
}

const Title: React.FC<IProps> = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;
