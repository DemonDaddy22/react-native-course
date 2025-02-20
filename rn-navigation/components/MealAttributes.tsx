import { COLORS } from '@/constants/colors';
import styles from '@/styles/mealAttributes';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface IProps {
  duration: number;
  affordability: string;
  complexity: string;
}

const MealAttributes: React.FC<IProps> = ({ duration, affordability, complexity }) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentGroup}>
        <Ionicons name='timer' size={14} color={COLORS.GREY_2} />
        <Text style={styles.contentText}>{duration} min</Text>
      </View>
      <View style={styles.contentGroup}>
        <Ionicons name='pricetag' size={14} color={COLORS.GREY_2} />
        <Text style={styles.contentText}>{affordability}</Text>
      </View>
      <View style={styles.contentGroup}>
        <Ionicons name='information-circle' size={14} color={COLORS.GREY_2} />
        <Text style={styles.contentText}>{complexity}</Text>
      </View>
    </View>
  );
};

export default MealAttributes;
