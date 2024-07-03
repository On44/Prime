import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <h2>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlfor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </h2>
  );
};

export default AddTransaction;
