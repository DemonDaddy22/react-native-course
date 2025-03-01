import CategoryList from '@/components/CategoryList';
import ScreenWrapper from '@/components/ScreenWrapper';

interface IProps {}

const Categories: React.FC<IProps> = () => {
  return (
    <ScreenWrapper>
      <CategoryList />
    </ScreenWrapper>
  );
};

export default Categories;
