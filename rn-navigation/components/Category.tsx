import styles from '@/styles/category';
import { Pressable, Text, View } from 'react-native';

interface IProps {
  title: string;
  color: string;
}

const Category: React.FC<IProps> = ({ title, color }) => {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Category;
