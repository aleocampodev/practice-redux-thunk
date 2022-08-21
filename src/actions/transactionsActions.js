import transactionService from "../services/transactionService";
import { SET_TRANSACTIONS } from "./types";

export const setTransactionsActions = () => {
  return {
    type: SET_TRANSACTIONS,
    //payload: [1, 2, 3, 4, 5],
  };
};

export const loadTransactions = async (dispatch) => {
  const { data } = await transactionService.get();
  dispatch(setTransactionsActions(data));
};
