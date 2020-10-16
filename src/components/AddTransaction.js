import React, { useState, useContext } from 'react';
import nextId from "react-id-generator";
import { TransactionContext } from '../context/GlobalContext';

const AddTransaction = () => {

 const { addIncome } = useContext(TransactionContext);
 const [income, setIncome] = useState({
  incomeText: '',
  incomeAmount: 0
 });

 //income
 const incomeChange = (e) => {
  setIncome({
   ...income,
   [e.target.name]: e.target.value
  });

 };

 const { incomeText, incomeAmount } = income;

 const incomeSubmit = (e) => {
  e.preventDefault();
  const newIncomeTransaction = {
   id: nextId(),
   incomeText,
   incomeAmount: incomeAmount * 1
  };
  addIncome(newIncomeTransaction);
  setIncome({
   incomeText: '',
   incomeAmount: 0
  });
 };

 //expense
 const { addExpense } = useContext(TransactionContext);
 const [expense, setExpense] = useState({
  expenseText: '',
  expenseAmount: 0,
 });

 const expenseChange = (e) => {
  setExpense({
   ...expense,
   [e.target.name]: e.target.value,
  });
 };
 const { expenseText, expenseAmount } = expense;

 const expenseSubmit = (e) => {
  e.preventDefault();
  const newExpenseTransaction = {
   id: nextId(),
   expenseText,
   expenseAmount: expenseAmount * 1

  };
  addExpense(newExpenseTransaction);
  setExpense({
   expenseText: '',
   expenseAmount: 0
  });
 };
 return (
  <div className='form-wrapper'>
   <form onSubmit={ incomeSubmit }>
    <div className="input-group income">
     <input
      onChange={ incomeChange }
      name='incomeText'
      value={ incomeText }
      type="text" placeholder='Add Income..' autoComplete='off' />
     <input
      name='incomeAmount'
      value={ incomeAmount }
      onChange={ incomeChange }
      type="number" placeholder='Amount' autoComplete='off' />
     <input type="submit" value='submit' />
    </div>
   </form>
   <form onSubmit={ expenseSubmit }>
    <div className="input-group income">
     <input
      onChange={ expenseChange }
      name='expenseText'
      value={ expenseText }
      type="text" placeholder='Add Expense..' autoComplete='off' />
     <input
      name='expenseAmount'
      value={ expenseAmount }
      onChange={ expenseChange }
      type="number" placeholder='Amount' autoComplete='off' />
     <input type="submit" value='submit' />
    </div>
   </form>
  </div>
 );
};

export default AddTransaction;