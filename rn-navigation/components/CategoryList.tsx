import { FlatList, View } from 'react-native';
import { CATEGORIES } from '@/data/data';
import { useCallback } from 'react';
import Category from './Category';
import CategoryType from '@/models/category';
import styles from '@/styles/categoryList';

interface IProps {}

const CategoryList: React.FC<IProps> = () => {
  const renderCategory = useCallback(({ item }: { item: CategoryType }) => {
    return <Category title={item.title} color={item.color} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;
