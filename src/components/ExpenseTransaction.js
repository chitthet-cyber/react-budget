import React, { useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';

const ExpenseTransaction = ({ expense }) => {
 const { deleteTransaction } = useContext(TransactionContext);
 return (

  <li key={ expense.id } className="transaction">
   <span className="transaction-text">{ expense.expenseText }</span>
   <span className="transaction-amount">${ expense.expenseAmount }</span>
   <button
    onClick={ () => deleteTransaction(expense.id) }
    className="delete-btn">
    <i className="fas fa-trash"></i>
   </button>
  </li>
 );
};

export default ExpenseTransaction;