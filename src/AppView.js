/*import { useState } from "react";

function AppView({
  transactions,
  colors,
  setTransactions,
  setColors,
  addColor,
}) {
  const [color, setColor] = useState("");
  const handleAddColors = () => {
    addColor(color);
    setColor("");
  };

  const handleAddTransactions = () => {};

  const handleInput = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      {JSON.stringify(transactions)}
      {JSON.stringify(colors)}

      <button onClick={handleAddTransactions}> Add transactions</button>
      <button onClick={handleAddColors}> Add colors</button>
      <input type="text" onChange={handleInput} value={color} />
    </div>
  );
}*/

/* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "./actions/transactionsActions";
import NotificationView from "./components/NotificationView";
import "./App.css";

const formatDefault = (x) => x.toString();

// sorting - tristate {unsorted,asc,desc}
const [DIR_NONE, DIR_ASC, DIR_DESC] = [0, 1, 2];
const sortDirClass = { 1: "sort_asc", 2: "sort_desc", 0: null };

const cmpNoop = () => 0;

// table layout
const columns = [
  {
    key: "date",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "Date",
  },
  {
    key: "check_no",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "No.",
  },
  {
    key: "debit",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency"],
    label: "Debit",
  },
  {
    key: "credit",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency"],
    label: "Credit",
  },
  {
    key: "balance",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency", "balance"],
    label: "Balance",
  },
  {
    key: "description",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "Description",
  },
  {
    key: "canceled",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["canceledColumn"],
    label: "Canceled?",
  },
];

function HeaderRow({ sortedField, toggleSort }) {
  return (
    <tr>
      {columns.map((col) => (
        <th key={col.key} className={col.key}>
          <div className={"middleAlign"}>
            {col.label}
            <i className="material-icons" style={{ visibility: "hidden" }}>
              arrow_drop_down
            </i>
          </div>
        </th>
      ))}
    </tr>
  );
}

// component to render the check book
function AppView({ transactions, colors, setColors }) {
  const [sortedField, setSortedField] = React.useState({});
  const dispatch = useDispatch();

  const toggleSort = (key, cmp) => {};

  useEffect(() => {
    setColors([]);
    dispatch(loadTransactions());
  }, []);

  return (
    <div className={"tableWrapper"}>
      <table>
        <thead>
          <HeaderRow sortedField={sortedField} toggleSort={toggleSort} />
        </thead>
        <tbody>
          {transactions &&
            transactions?.map((transaction) => (
              <>
                <tr key={transaction.description}>
                  <td>{transaction.date}</td>
                  <td>{transaction.check_no}</td>
                  <td>{transaction.debit}</td>
                  <td>{transaction.credit}</td>
                  <td>{transaction.balance}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction?.canceled}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
      {JSON.stringify(transactions)}
    </div>
  );
}

export default AppView;
