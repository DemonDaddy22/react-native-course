import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MealType from '@/models/meal';
import styles from '@/styles/meal';
import { COLORS } from '@/constants/colors';

interface IProps {
  meal: MealType;
}

const Meal: React.FC<IProps> = ({ meal }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.cardPressed}>
      <View style={styles.box}>
        <View style={styles.card}>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} resizeMode='cover' />
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.content}>
            <View style={styles.contentGroup}>
              <Ionicons name='timer' size={14} color={COLORS.GREY_2} />
              <Text style={styles.contentText}>{meal.duration} min</Text>
            </View>
            <View style={styles.contentGroup}>
              <Ionicons name='pricetag' size={14} color={COLORS.GREY_2} />
              <Text style={styles.contentText}>{meal.affordability}</Text>
            </View>
            <View style={styles.contentGroup}>
              <Ionicons name='information-circle' size={14} color={COLORS.GREY_2} />
              <Text style={styles.contentText}>{meal.complexity}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Meal;
