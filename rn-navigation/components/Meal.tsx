import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RelativePathString, useLocalSearchParams, useRouter } from 'expo-router';
import MealType from '@/models/meal';
import styles from '@/styles/meal';
import { COLORS } from '@/constants/colors';
import MealAttributes from './MealAttributes';

interface IProps {
  meal: MealType;
}

const Meal: React.FC<IProps> = ({ meal }) => {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  const handleMealCardPress = () => {
    router.push(`/category/${category}/${meal.id}` as RelativePathString);
  };

  return (
    <Pressable style={({ pressed }) => pressed && styles.cardPressed} onPress={handleMealCardPress}>
      <View style={styles.box}>
        <View style={styles.card}>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} resizeMode='cover' />
          <Text style={styles.title}>{meal.title}</Text>
          <MealAttributes duration={meal.duration} affordability={meal.affordability} complexity={meal.complexity} />
        </View>
      </View>
    </Pressable>
  );
};

export default Meal;
