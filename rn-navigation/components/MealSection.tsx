import styles from '@/styles/mealSection';
import { Text, View } from 'react-native';

interface IProps {
  title: string;
  items: string[];
}

const MealSection: React.FC<IProps> = ({ title, items }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {items.map(ingredient => (
          <Text key={ingredient} style={styles.item}>
            - {ingredient}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default MealSection;
