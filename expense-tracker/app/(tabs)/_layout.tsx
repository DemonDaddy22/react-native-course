import { COLORS } from '@/constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.ACCENT_3 },
        headerTintColor: COLORS.LIGHT_1,
        tabBarStyle: { backgroundColor: COLORS.ACCENT_3_1 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <FontAwesome size={24} name='home' color={focused ? COLORS.ACCENT_1 : COLORS.LIGHT_3} />
          ),
        }}
      />
      <Tabs.Screen
        name='allTransactions'
        options={{
          title: 'All Transactions',
          tabBarIcon: ({ focused }) => (
            <FontAwesome size={22} name='list' color={focused ? COLORS.ACCENT_2 : COLORS.LIGHT_3} />
          ),
        }}
      />
      <Tabs.Screen
        name='recentTransactions'
        options={{
          title: 'Recent Transactions',
          tabBarIcon: ({ focused }) => (
            <FontAwesome size={20} name='hourglass' color={focused ? COLORS.ACCENT_5 : COLORS.LIGHT_3} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
