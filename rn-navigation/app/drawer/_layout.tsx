import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const DrawerNavigator = withLayoutContext(createDrawerNavigator().Navigator);

const screenOptions = {
  headerStyle: { backgroundColor: COLORS.GREY_3 },
  headerTintColor: COLORS.DARK,
  drawerActiveTintColor: COLORS.DARK,
  drawerInactiveTintColor: COLORS.GREY_2,
};

const DrawerLayout = () => {
  return (
    <DrawerNavigator screenOptions={screenOptions}>
      <DrawerNavigator.Screen
        name='categories'
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name='favourites'
        options={{
          title: 'Favourites',
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </DrawerNavigator>
  );
};

export default DrawerLayout;
