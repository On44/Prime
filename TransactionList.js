import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
  const {transactions}= useContext(GlobalContext);

  return (
    <h2>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction => (<li className="minus">
          {transaction.text} <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>))}
      </ul>
    </h2>
  );
};

export default TransactionList;
