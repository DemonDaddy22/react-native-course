import { ALL_TRANSACTIONS } from '@/data/dummy';
import React from 'react';

interface IContext {
  transactions: IExpense[];
  addTransaction: (transaction: IExpense) => void;
  updateTransaction: (id: number, transaction: IExpense) => void;
  deleteTransaction: (id: number) => void;
}

type TTransactionAction = 'add' | 'update' | 'delete';

export const TransactionsContext = React.createContext<IContext>({
  transactions: [],
  addTransaction: () => {},
  updateTransaction: () => {},
  deleteTransaction: () => {},
});

const transactionsReducer = (
  state: IExpense[],
  action: { type: TTransactionAction; payload: Partial<{ transaction: Partial<IExpense>; id: number }> }
) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.payload.transaction, id: Date.now() } as IExpense];
    case 'update':
      const transactionIndex = state.findIndex(t => t.id === action.payload.id);
      if (transactionIndex === -1) {
        return state;
      }
      const updatedTransaction = {
        ...state[transactionIndex],
        ...action.payload.transaction,
      };
      const updatedTransactions = [...state];
      updatedTransactions[transactionIndex] = updatedTransaction;
      return updatedTransactions;
    case 'delete':
      return state.filter(t => t.id !== action.payload.id);
    default:
      return state;
  }
};

export const TransactionsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, dispatch] = React.useReducer(transactionsReducer, ALL_TRANSACTIONS);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction: transaction => dispatch({ type: 'add', payload: { transaction } }),
        updateTransaction: (id, transaction) => dispatch({ type: 'update', payload: { id, transaction } }),
        deleteTransaction: id => dispatch({ type: 'delete', payload: { id } }),
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
