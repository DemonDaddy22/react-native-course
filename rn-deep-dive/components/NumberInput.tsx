import styles from '@/styles/input';
import { useMemo } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface IProps extends TextInputProps {
  variant?: TVariant;
}

const NumberInput: React.FC<IProps> = ({ value, variant = 'accent3', onChangeText }) => {
  const inputVariant = useMemo(() => {
    switch (variant) {
      case 'accent1':
        return styles.inputAccent1;
      case 'accent2':
        return styles.inputAccent2;
      case 'accent3':
      default:
        return styles.inputAccent3;
    }
  }, [variant]);

  return (
    <TextInput
      keyboardType='number-pad'
      maxLength={2}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, inputVariant]}
    />
  );
};

export default NumberInput;
