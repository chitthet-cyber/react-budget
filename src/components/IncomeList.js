import React, { useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';
import IncomeTransaction from './IncomeTransaction';

const IncomeList = () => {
 const { incomeTransactions } = useContext(TransactionContext);
 return (
  <div className="transactions transactions-income">
   <h2>Transaction History</h2>
   <ul className="transaction-list">
    { incomeTransactions.map(income => {
     return <IncomeTransaction key={ income.id } income={ income } />;
    }) }

   </ul>
  </div>
 );
};

export default IncomeList;