import React, { useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';

const IncomeTransaction = ({ income }) => {
 const { deleteTransaction } = useContext(TransactionContext);
 return (
  <li className="transaction">
   <span className="transaction-text">{ income.incomeText }</span>
   <span className="transaction-amount">${ income.incomeAmount }</span>
   <button
    onClick={ () => deleteTransaction(income.id) }
    className="delete-btn">
    <i className="fas fa-trash"></i>
   </button>
  </li>
 );
};

export default IncomeTransaction;