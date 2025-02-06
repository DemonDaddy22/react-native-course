import MealList from '@/components/MealList';
import ScreenWrapper from '@/components/ScreenWrapper';
import { CATEGORIES, MEALS } from '@/data/data';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect, useMemo } from 'react';

interface IProps {}

const Category: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const filteredMeals = useMemo(() => {
    return MEALS.filter(meal => meal.categoryIds.includes(category));
  }, [category]);

  useLayoutEffect(() => {
    const categoryData = CATEGORIES.find(c => c.id === category);
    navigation.setOptions({ title: `${categoryData?.title} Meals` });
  }, [category, navigation]);

  return (
    <ScreenWrapper>
      <MealList meals={filteredMeals} />
    </ScreenWrapper>
  );
};

export default Category;
