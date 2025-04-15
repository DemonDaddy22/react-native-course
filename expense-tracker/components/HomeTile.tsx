import styles from '@/styles/homeTile';
import { RelativePathString, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  type: 'all' | 'recent';
}

const HomeTile: React.FC<IProps> = ({ type }) => {
  const router = useRouter();

  const title = useMemo(() => {
    switch (type) {
      case 'all':
        return 'All Transactions';
      case 'recent':
        return 'Recent Transactions';
      default:
        return undefined;
    }
  }, [type]);

  const subTitle = useMemo(() => {
    switch (type) {
      case 'all':
        return 'Tap to view all transactions';
      case 'recent':
        return 'Tap to view transactions from the last 7 days';
      default:
        return undefined;
    }
  }, [type]);

  const background = useMemo(() => {
    switch (type) {
      case 'all':
        return 'https://images.unsplash.com/photo-1539009139598-75df7c89734d?q=75&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      case 'recent':
        return 'https://images.unsplash.com/photo-1670814491376-7f038b832a0a?q=75&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      default:
        return undefined;
    }
  }, [type]);

  const handlePress = () => {
    let route;
    switch (type) {
      case 'all':
        route = 'allTransactions';
        break;
      case 'recent':
        route = 'recentTransactions';
        break;
      default:
        break;
    }
    if (route) {
      router.push(`/(tabs)/${route}` as RelativePathString);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.tile}>
        <ImageBackground
          style={styles.background}
          imageStyle={styles.backgroundImage}
          resizeMode='cover'
          source={{ uri: background }}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default HomeTile;
