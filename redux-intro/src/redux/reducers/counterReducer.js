import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 15, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return state + action.payload;

    case actionTypes.DECREASE_COUNTER:
      return state - action.payload;

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return state + action.payload;

    default:
      return state;
  }
};

export default counterReducer;
