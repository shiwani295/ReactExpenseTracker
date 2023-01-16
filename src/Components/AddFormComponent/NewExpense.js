import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    //come from parent(app.js ) and then send data (expenseData) to again app.js
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  //its add about buttons
  const [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };
  //cancel button
  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div>
      {/* here you are pass the data child(ExpenseForm) to parent(NewExpense) */}
      {!isEditing && (
        <div className="Add-Expense">
          <button onClick={startEditingHandler}>Add New Expense</button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;

// done
