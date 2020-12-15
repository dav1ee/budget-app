import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteIncome } from '../redux/actions/income';

const IncomeList = () => {
  const dispatch = useDispatch();
  const { income } = useSelector((state) => state);

  return (
    <div className="transactions transactions-income">
      <h2>История транзакций</h2>
      <ul className="transaction-list">
        {income &&
          income.map((item) => (
            <li key={item.id} className="transaction">
              <span className="transaction-text">{item.text}</span>
              <span className="transaction-amount">₽{item.amount.toFixed(2)}</span>
              <button onClick={() => dispatch(deleteIncome(item.id))} className="delete-btn">
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default IncomeList;
