import transactionService from "../services/transactionService";
import { SET_TRANSACTIONS } from "./types";

export const setTransactionsActions = (payload) => {
  return {
    type: SET_TRANSACTIONS,
    payload,
  };
};

export const loadTransactions = () => {
  return async (dispatch) => {
    try {
      const { data } = await transactionService.get();
      dispatch(setTransactionsActions(data));
    } catch (error) {
      console.log(error);
    }
  };
};
