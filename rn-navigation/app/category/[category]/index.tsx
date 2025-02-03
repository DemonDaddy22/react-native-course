import { useLocalSearchParams } from 'expo-router';

interface IProps {}

const Category: React.FC<IProps> = () => {
  const { category } = useLocalSearchParams();
  console.log({ category });

  return null;
};

export default Category;
