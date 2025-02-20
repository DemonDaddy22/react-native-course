import { useLayoutEffect, useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import { MEALS } from '@/data/data';
import styles from '@/styles/mealDetails';
import MealSection from '@/components/MealSection';
import MealAttributes from '@/components/MealAttributes';

interface IProps {}

const Category: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { meal } = useLocalSearchParams();

  const filteredMeal = useMemo(() => {
    return MEALS.find(m => m.id === meal);
  }, [meal]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: filteredMeal?.title });
  }, [meal, navigation]);

  return filteredMeal ? (
    <ScreenWrapper>
      <ScrollView>
        <Image source={{ uri: filteredMeal.imageUrl }} style={styles.image} resizeMode='cover' />
        <Text style={styles.title}>{filteredMeal.title}</Text>
        <MealAttributes
          duration={filteredMeal.duration}
          affordability={filteredMeal.affordability}
          complexity={filteredMeal.complexity}
        />
        <View style={styles.divider} />
        <MealSection title='Ingredients' items={filteredMeal.ingredients} />
        <View style={styles.divider} />
        <MealSection title='Instructions' items={filteredMeal.steps} />
      </ScrollView>
    </ScreenWrapper>
  ) : null;
};

export default Category;
