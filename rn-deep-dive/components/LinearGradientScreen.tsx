import { ReactNode } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/Colors';
import styles from '@/styles/screen';

interface IProps {
  children: ReactNode;
}

const LinearGradientScreen: React.FC<IProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LinearGradient colors={[COLORS.GREY_1, COLORS.DARK, COLORS.BLACK]} style={styles.screen}>
          {children}
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LinearGradientScreen;
