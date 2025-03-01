import { useCallback, useContext, useLayoutEffect, useMemo } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import { MEALS } from '@/data/data';
import styles from '@/styles/mealDetails';
import MealSection from '@/components/MealSection';
import MealAttributes from '@/components/MealAttributes';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { FavouritesContext } from '@/store/context/FavouritesContext';

interface IProps {}

const Category: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { meal } = useLocalSearchParams();

  const { ids, addFavourite, removeFavourite } = useContext(FavouritesContext);

  const filteredMeal = useMemo(() => {
    return MEALS.find(m => m.id === meal);
  }, [meal]);

  const markedFavourite = useMemo(() => {
    return ids.includes(filteredMeal?.id);
  }, [filteredMeal?.id, JSON.stringify(ids)]);

  const toggleFavouriteMeal = useCallback(() => {
    markedFavourite ? removeFavourite(filteredMeal?.id) : addFavourite(filteredMeal?.id);
  }, [markedFavourite, filteredMeal?.id, addFavourite, removeFavourite]);

  const renderFavouriteIcon = useMemo(() => {
    const icon = markedFavourite ? 'star' : 'star-outline';
    return (
      <Pressable onPress={toggleFavouriteMeal}>
        <Ionicons name={icon} size={20} color={COLORS.YELLOW} />
      </Pressable>
    );
  }, [markedFavourite]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: filteredMeal?.title, headerRight: () => renderFavouriteIcon });
  }, [meal, navigation, renderFavouriteIcon]);

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
