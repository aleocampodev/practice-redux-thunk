import AppView from "./AppView";
import { connect } from "react-redux";
import { setTransactionsActions } from "./actions/transactionsActions";
import { setColorsActions, addColor } from "./actions/colorsActions";
//import { loadTransactions } from "./actions/transactionsActions";

const mapStateToProps = (state) => ({
  transactions: state.transactions,
  colors: state.colors,
  notification: state.notification,
});

const mapDispatchToProps = (dispatch) => ({
  //setTransactions: (value) => dispatch(setTransactionsActions(value)),
  setColors: (value) => dispatch(setColorsActions(value)),
  addColor: (value) => dispatch(addColor(value)),
  notification: (value) => dispatch(value),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppView)
