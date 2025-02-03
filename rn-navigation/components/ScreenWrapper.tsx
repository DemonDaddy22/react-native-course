import styles from '@/styles/screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

interface IProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </>
  );
};

export default ScreenWrapper;
