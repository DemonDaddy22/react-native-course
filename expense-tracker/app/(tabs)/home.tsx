import HomeTile from '@/components/HomeTile';
import Screen from '@/components/Screen';
import Summary from '@/components/Summary';
import styles from '@/styles/home';
import { useMemo } from 'react';
import { ScrollView, Text } from 'react-native';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const salutation = useMemo(() => {
    const currHour = new Date().getHours();
    if (currHour < 12) {
      return 'Good Morning 🌻';
    } else if (currHour < 18) {
      return 'Good Afternoon 🌞';
    } else {
      return 'Good Evening ✨';
    }
  }, []);

  return (
    <Screen>
      <ScrollView style={styles.home}>
        <Text style={styles.title}>{salutation}</Text>
        <Summary />
        <HomeTile type='all' />
        <HomeTile type='recent' />
      </ScrollView>
    </Screen>
  );
};

export default Home;
