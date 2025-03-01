import MealList from '@/components/MealList';
import ScreenWrapper from '@/components/ScreenWrapper';
import { MEALS } from '@/data/data';
import { FavouritesContext } from '@/store/context/FavouritesContext';
import { useContext, useMemo } from 'react';
import { Text } from 'react-native';

interface IProps {}

const Favourites: React.FC<IProps> = () => {
  const { ids } = useContext(FavouritesContext);

  const filteredMeals = useMemo(() => {
    return MEALS.filter(meal => {
      return ids.includes(meal.id);
    });
  }, [JSON.stringify(ids)]);

  return (
    <ScreenWrapper>
      <MealList meals={filteredMeals} />
    </ScreenWrapper>
  );
};

export default Favourites;
