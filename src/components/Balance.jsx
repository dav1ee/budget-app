import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const income = useSelector(({ income }) => income);
  const expense = useSelector(({ expense }) => expense);

  const incomeAmount = income
    .map((item) => item.amount)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expenseAmount = expense
    .map((item) => item.amount)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>Ваш Баланс</h2>
      <h3>₽{incomeAmount - expenseAmount}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Доход</h3>
          <p>+₽{incomeAmount}</p>
        </div>
        <div className="minus">
          <h3>Расход</h3>
          <p>-₽{expenseAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
