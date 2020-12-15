import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteExpense } from '../redux/actions/expense';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const { expense } = useSelector((state) => state);

  return (
    <div className="transactions transactions-expense">
      <h2>История транзакций</h2>
      <ul className="transaction-list">
        {expense &&
          expense.map((item) => (
            <li key={item.id} className="transaction">
              <span className="transaction-text">{item.text}</span>
              <span className="transaction-amount">₽{item.amount.toFixed(2)}</span>
              <button onClick={() => dispatch(deleteExpense(item.id))} className="delete-btn">
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
