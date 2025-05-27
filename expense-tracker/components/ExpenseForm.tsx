import styles from '@/styles/expenseForm';
import React from 'react';
import { View } from 'react-native';
import FormInput from './UI/FormInput';

interface IProps {}

interface IFormState {
  amount: { value: string; error: null | string };
  date: { value: string; error: null | string };
  description: { value: string; error: null | string };
}

const formReducer = (state: IFormState, action: { type: any; payload: any }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const ExpenseForm: React.FC<IProps> = ({}) => {
  const [formState, dispatch] = React.useReducer(formReducer, {
    amount: { value: '', error: null },
    date: { value: '', error: null },
    description: { value: '', error: null },
  });

  return (
    <View style={styles.formContainer}>
      <View style={styles.formRow}>
        <FormInput label='Amount' value={formState.amount.value} keyboardType='decimal-pad' />
        <FormInput label='Date' value={formState.date.value} />
      </View>
      <View style={styles.formRow}>
        <FormInput
          label='Description'
          multiline
          value={formState.description.value}
          inputStyle={styles.descriptionInput}
        />
      </View>
    </View>
  );
};

export default ExpenseForm;
