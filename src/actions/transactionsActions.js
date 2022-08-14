//import transactionService from "../services/transactionService";
import { SET_TRANSACTIONS } from "./types";

export const setTransactions = (payload) => {
  return {
    type: SET_TRANSACTIONS,
    payload,
  };
};
