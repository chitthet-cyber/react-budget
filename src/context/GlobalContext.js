import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
 incomeTransactions: [],
 expenseTransactions: []
};

export const TransactionContext = createContext(initialState);

const TransactionContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);

 //add income
 const addIncome = (newIncomeTransaction) => {
  dispatch({
   type: 'Add_Income',
   payload: newIncomeTransaction
  });
 };

 // add expense
 const addExpense = (newExpenseTransaction) => {
  dispatch({
   type: 'Add_Expense',
   payload: newExpenseTransaction
  });
 };

 //delete transaction
 const deleteTransaction = (id) => {
  // console.log(id);
  dispatch({
   type: 'DELETE_Transaction',
   payload: id
  });
 };


 return (
  <TransactionContext.Provider value={ {
   incomeTransactions: state.incomeTransactions,
   expenseTransactions: state.expenseTransactions,
   addIncome,
   addExpense,
   deleteTransaction
  } }>
   {children }
  </TransactionContext.Provider>
 );
};

export default TransactionContextProvider;