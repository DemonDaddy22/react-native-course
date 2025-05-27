import styles from '@/styles/formInput';
import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, View } from 'react-native';

interface IProps extends TextInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const FormInput: React.FC<IProps> = ({ label, labelStyle, inputStyle, ...restProps }) => {
  return (
    <View style={styles.inputContainer}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <TextInput {...restProps} style={[styles.input, inputStyle]} />
    </View>
  );
};

export default FormInput;
