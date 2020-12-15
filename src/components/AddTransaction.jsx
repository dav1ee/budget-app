import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addIncome } from '../redux/actions/income';
import { addExpense } from '../redux/actions/expense';

const AddTransaction = () => {
  const dispatch = useDispatch();

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: '',
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    if (incomeText !== '' && incomeAmount !== '') {
      const newIncome = {
        id,
        text: incomeText,
        amount: incomeAmount * 1,
      };

      dispatch(addIncome(newIncome));

      setIncome({
        incomeText: '',
        incomeAmount: '',
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: '',
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    if (expenseText !== '' && expenseAmount !== '') {
      const newExpense = {
        id,
        text: expenseText,
        amount: expenseAmount * 1,
      };

      dispatch(addExpense(newExpense));

      setExpense({
        expenseText: '',
        expenseAmount: '',
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            value={incomeText}
            onChange={onChangeIncome}
            name="incomeText"
            type="text"
            placeholder="Доход"
            autoComplete="off"
          />
          <input
            value={incomeAmount}
            onChange={onChangeIncome}
            name="incomeAmount"
            type="number"
            placeholder="Количество"
            autoComplete="off"
          />
          <input type="submit" value="Добавить" />
        </div>
      </form>

      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            value={expenseText}
            onChange={onChangeExpense}
            name="expenseText"
            type="text"
            placeholder="Расход"
            autoComplete="off"
          />
          <input
            value={expenseAmount}
            onChange={onChangeExpense}
            name="expenseAmount"
            type="number"
            placeholder="Количество"
            autoComplete="off"
          />
          <input type="submit" value="Добавить" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
