import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';
import { COLORS } from '@/constants/colors';

const DrawerNavigator = withLayoutContext(createDrawerNavigator().Navigator);

const screenOptions = {
  headerStyle: { backgroundColor: COLORS.GREY_3 },
  headerTintColor: COLORS.DARK,
};

const DrawerLayout = () => {
  return (
    <DrawerNavigator screenOptions={screenOptions}>
      <DrawerNavigator.Screen name='categories' options={{ title: 'All Categories' }} />
      <DrawerNavigator.Screen name='favourites' options={{ title: 'Favourites' }} />
    </DrawerNavigator>
  );
};

export default DrawerLayout;
