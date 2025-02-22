import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initialize state
const initialState = {
  transactions: [
    { id: 1, text: "Salary", amount: -20 },
    { id: 2, text: "Food", amount: 300 },
    { id: 3, text: "Books", amount: -10 },
    { id: 4, text: "Transport Cost", amount: 100},
    { id: 4, text: "Personal Expenses", amount: 150 },
  ],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, ] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
