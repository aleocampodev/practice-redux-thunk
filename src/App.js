/* eslint-disable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './actions/transactionsActions';

import './App.css'

const formatDefault = (x) => x.toString()

// sorting - tristate {unsorted,asc,desc}
const [DIR_NONE,DIR_ASC,DIR_DESC] = [0,1,2];
const sortDirClass = { 1:'sort_asc', 2:'sort_desc', 0:null }

const cmpNoop = () => 0

// table layout
const columns = [
  { key:'date',        cmp:cmpNoop, format:formatDefault, classNames:[], label:'Date'},
  { key:'check_no',    cmp:cmpNoop, format:formatDefault, classNames:[], label:'No.',},
  { key:'debit',       cmp:cmpNoop, format:formatDefault, classNames:['currency'], label:'Debit',},
  { key:'credit',      cmp:cmpNoop, format:formatDefault, classNames:['currency'], label:'Credit',},
  { key:'balance',     cmp:cmpNoop, format:formatDefault, classNames:['currency', 'balance'], label:'Balance',},
  { key:'description', cmp:cmpNoop, format:formatDefault, classNames:[], label:'Description',},
  { key:'canceled',    cmp:cmpNoop, format:formatDefault, classNames:['canceledColumn'], label:'Canceled?',},
];

function HeaderRow({ sortedField, toggleSort }) {
  return (
    <tr>
      {columns.map( (col) =>
        <th
          key={col.key}
          className={col.key}
          >
            <div className={'middleAlign'}>
              {col.label}
              <i className="material-icons" style={{ visibility: 'hidden' }}>arrow_drop_down</i>
            </div>
          </th>
      )}
    </tr>
  )
}

/*
The associated style sheet will render the checkbox nicely with the following:

<td className="canceled canceledColumn">
  <div className="checkboxWrapper">
    <div className="md-checkbox">
      <input id={`cancelCheckbox${check.tid}`} type="checkbox" checked={check.canceled}/>
      <label htmlFor={`cancelCheckbox${check.tid}`}></label>
    </div>
  </div>
</td>
*/

// component to render the check book
function App() {
  const [sortedField, setSortedField] = React.useState({});
  const toggleSort= (key, cmp) => {};

  useEffect(() => {
  }, [])

  return (
    <div className={'tableWrapper'}>
      <table>
        <thead><HeaderRow sortedField={sortedField} toggleSort={toggleSort}/></thead>
      </table>
    </div>
  )
};

export default App
