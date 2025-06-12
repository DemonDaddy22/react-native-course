import styles from '@/styles/expenseForm';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import FormInput from './UI/FormInput';
import Button, { ButtonOutline } from './UI/Button';
import { getLocalFormattedDate } from '@/utils';

// TODO - handle form actions and validations
// TODO - add keyboard dismissal wrapper

type TFormAction =
  | 'SET_AMOUNT'
  | 'SET_DATE'
  | 'SET_DESCRIPTION'
  | 'SET_AMOUNT_ERROR'
  | 'SET_DATE_ERROR'
  | 'SET_DESCRIPTION_ERROR';

interface IProps {
  isNewExpense: boolean;
  expenseData?: IExpense;
  onSubmit: (data: Partial<IExpense>) => void;
  onCancel: () => void;
  onDelete?: () => void;
}

interface IFormState {
  amount: { value: string; error: null | string };
  date: { value: string; error: null | string };
  description: { value: string; error: null | string };
}

const formReducer = (state: IFormState, action: { type: TFormAction; payload: { value: string } }) => {
  switch (action.type) {
    case 'SET_AMOUNT':
      return {
        ...state,
        amount: { value: action.payload.value, error: null },
      };
    case 'SET_DATE':
      return {
        ...state,
        date: { value: action.payload.value, error: null },
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: { value: action.payload.value, error: null },
      };
    case 'SET_AMOUNT_ERROR':
      return {
        ...state,
        amount: { ...state.amount, error: action.payload.value },
      };
    case 'SET_DATE_ERROR':
      return {
        ...state,
        date: { ...state.date, error: action.payload.value },
      };
    case 'SET_DESCRIPTION_ERROR':
      return {
        ...state,
        description: { ...state.description, error: action.payload.value },
      };
    default:
      return state;
  }
};

export const ExpenseForm: React.FC<IProps> = ({ isNewExpense, expenseData, onSubmit, onCancel, onDelete }) => {
  const [formState, dispatch] = React.useReducer(formReducer, {
    amount: { value: String(expenseData?.amount ?? ''), error: null },
    date: {
      value: expenseData?.date ? getLocalFormattedDate(expenseData.date) : '',
      error: null,
    },
    description: { value: expenseData?.title ?? '', error: null },
  });

  const handleFormValidation = () => {
    if (!(Number(formState.amount.value) > 0)) {
      dispatch({ type: 'SET_AMOUNT_ERROR', payload: { value: 'Amount must be greater than 0' } });
      return false;
    }
    if (!formState.date.value.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      dispatch({ type: 'SET_DATE_ERROR', payload: { value: 'Invalid date format (MM/DD/YYYY)' } });
      return false;
    }
    if (formState.description.value.trim().length === 0) {
      dispatch({ type: 'SET_DESCRIPTION_ERROR', payload: { value: 'Description cannot be empty' } });
      return false;
    }
    return true;
  };

  const handleFormSubmit = () => {
    if (!handleFormValidation()) {
      return;
    }
    onSubmit({
      amount: Number(formState.amount.value),
      date: new Date(formState.date.value),
      title: formState.description.value,
    });
    onCancel();
  };

  const handleExpenseDelete = () => {
    onDelete?.();
    onCancel();
  };

  const handleInputChange = (type: TFormAction) => (value: string) => {
    dispatch({ type, payload: { value } });
  };

  const renderError = () => {
    const error = Object.values(formState).find(field => field.error)?.error;
    return error ? (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>*{error}</Text>
      </View>
    ) : null;
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formRow}>
        <FormInput
          label='Amount (₹)'
          value={formState.amount.value}
          keyboardType='decimal-pad'
          onChangeText={handleInputChange('SET_AMOUNT')}
        />
        <FormInput
          label='Date'
          value={formState.date.value}
          maxLength={10}
          placeholder='DD/MM/YYYY'
          onChangeText={handleInputChange('SET_DATE')}
        />
      </View>
      <View style={styles.formRow}>
        <FormInput
          label='Description'
          multiline
          value={formState.description.value}
          inputStyle={styles.descriptionInput}
          onChangeText={handleInputChange('SET_DESCRIPTION')}
        />
      </View>
      {renderError()}
      <View style={[styles.formRow, styles.buttonsRow]}>
        <Button title='Add' style={styles.button} onPress={handleFormSubmit} />
        <Button title='Cancel' type='secondary' style={styles.button} onPress={onCancel} />
      </View>
      {!isNewExpense ? (
        <View style={styles.formRow}>
          <ButtonOutline title='Delete' style={styles.button} type='red' onPress={handleExpenseDelete} />
        </View>
      ) : null}
    </View>
  );
};

export default ExpenseForm;
