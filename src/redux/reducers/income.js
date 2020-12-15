import { ADD_INCOME, DELETE_INCOME } from '../actions/income';

const initialState = [];

const income = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME: {
      return [action.payload, ...state];
    }

    case DELETE_INCOME: {
      let newState = [...state];
      newState = newState.filter((state) => state.id !== action.payload);
      return newState;
    }

    default:
      return state;
  }
};

export default income;
