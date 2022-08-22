import { SET_TRANSACTIONS } from "../actions/types";

const initialState = [];

function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  }
}

export default transactionsReducer;
