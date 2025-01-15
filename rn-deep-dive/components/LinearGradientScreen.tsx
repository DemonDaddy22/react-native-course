import { ReactNode } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
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
          <View style={styles.footerImages}>
            <Image
              resizeMode='contain'
              source={require('../assets/images/hands-1.png')}
              style={[styles.footerImage, styles.footerImage1]}
            />
            <Image resizeMode='contain' source={require('../assets/images/hands-2.png')} style={styles.footerImage} />
            <Image
              resizeMode='contain'
              source={require('../assets/images/hands-3.png')}
              style={[styles.footerImage, styles.footerImage3]}
            />
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LinearGradientScreen;
