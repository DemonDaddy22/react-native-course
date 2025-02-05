import MealType from '@/models/meal';
import { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import Meal from './Meal';
import styles from '@/styles/list';

interface IProps {
  meals: Array<MealType>;
}

const MealList: React.FC<IProps> = ({ meals }) => {
  const renderMeal = useCallback(({ item }: { item: MealType }) => {
    return <Meal meal={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={renderMeal}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealList;
