import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/expense';

const initialState = [];

const expense = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return [action.payload, ...state];
    }

    case DELETE_EXPENSE: {
      let newState = [...state];
      newState = newState.filter((state) => state.id !== action.payload);
      return newState;
    }

    default:
      return state;
  }
};

export default expense;
