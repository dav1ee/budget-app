export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addExpense = (obj) => ({
  type: ADD_EXPENSE,
  payload: obj,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});
