export const ADD_INCOME = 'ADD_INCOME';
export const DELETE_INCOME = 'DELETE_INCOME';

export const addIncome = (obj) => ({
  type: ADD_INCOME,
  payload: obj,
});

export const deleteIncome = (id) => ({
  type: DELETE_INCOME,
  payload: id,
});
