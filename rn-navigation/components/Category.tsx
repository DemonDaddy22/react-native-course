import styles from '@/styles/category';
import { RelativePathString, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

interface IProps {
  id: string;
  title: string;
  color: string;
}

const Category: React.FC<IProps> = ({ id, title, color }) => {
  const router = useRouter();

  const handleCategoryItemPress = () => {
    router.push(`/category/${id}` as RelativePathString);
  };

  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [styles.outerContainer, pressed && styles.containerPressed]}
        onPress={handleCategoryItemPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Category;
