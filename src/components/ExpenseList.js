import React, { useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseList = () => {
 const { expenseTransactions } = useContext(TransactionContext);
 return (
  <div className="transactions transactions-expense">
   <h2>Transaction History</h2>
   <ul className="transaction-list">
    { expenseTransactions.map(expense => {
     return <ExpenseTransaction key={ expense.id } expense={ expense } />;
    }) }
   </ul>
  </div>

 );
};

export default ExpenseList;