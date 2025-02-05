import MealList from '@/components/MealList';
import ScreenWrapper from '@/components/ScreenWrapper';
import { MEALS } from '@/data/data';
import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';

interface IProps {}

const Category: React.FC<IProps> = () => {
  const { category } = useLocalSearchParams();

  const filteredMeals = useMemo(() => {
    return MEALS.filter(meal => meal.categoryIds.includes(category));
  }, [category]);

  return (
    <ScreenWrapper>
      <MealList meals={filteredMeals} />
    </ScreenWrapper>
  );
};

export default Category;
