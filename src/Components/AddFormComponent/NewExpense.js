import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    //come from parent(app.js ) and then send data (expenseData) to again app.js
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      {/* here you are pass the data child(ExpenseForm) to parent(NewExpense) */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
