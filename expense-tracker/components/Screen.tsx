import styles from '@/styles/screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

interface IProps {
  children: React.ReactNode;
}

const Screen: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </>
  );
};

export default Screen;
