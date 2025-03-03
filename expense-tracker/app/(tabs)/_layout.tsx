import { COLORS } from '@/constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.ACCENT_1,
        headerStyle: { backgroundColor: COLORS.ACCENT_3 },
        headerTintColor: COLORS.LIGHT_1,
        tabBarStyle: { backgroundColor: COLORS.ACCENT_3 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name='allTransactions'
        options={{
          title: 'All Transactions',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name='list' color={color} />,
        }}
      />
      <Tabs.Screen
        name='recentTransactions'
        options={{
          title: 'Recent Transactions',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name='hourglass' color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
