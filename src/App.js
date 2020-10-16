import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import IncomeList from './components/IncomeList';
import TransactionContextProvider from './context/GlobalContext';

function App() {
  return (
    <TransactionContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </TransactionContextProvider>
  );
}

export default App;
