import React from 'react';

import { Balance, AddTransaction, IncomeList, ExpenseList } from './components';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>Бюджет</h1>
        </div>
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default App;
