import React from "react";

export const IncomeExpenses = () => {
  return (
    <h2>
      <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">
            +$561.00
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">
            -$1139.00
          </p>
        </div>
      </div>
    </h2>
  );
};

export default IncomeExpenses;
