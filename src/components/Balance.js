import React, { useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(TransactionContext);

  // total income
  const totalIncome = incomeTransactions
    .map(incomeTransaction => incomeTransaction.incomeAmount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // total expense
  const totalExpense = expenseTransactions
    .map(expenseTransaction => expenseTransaction.expenseAmount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${ (totalIncome - totalExpense).toFixed(2) }</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${ totalIncome }</p>
        </div>
        <div className="minus">
          <h3>Expense</h3>
          <p>-${ totalExpense }</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;