import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //(t-7) Submitting the form

  const TitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateHandler = (event) => {
    setenteredDate(event.target.value);
  };

  //form submit
  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    //that is comefrom parent (NewExpense) send the data (expenseData) to parent
    props.onSaveExpenseData(expenseData);
  };
  return (
    <div className="ExpForm">
      <form onSubmit={FormSubmitHandler}>
        <div className="new-expense__controls ">
          <div className="new-expense__controls ">
            <label>Expense Title</label>
            <input
              type="text"
              placeholder="Enter the Expense Title"
              onChange={TitleHandler}
            />
          </div>
          <div className="new-expense__controls ">
            <label>Expense Amount</label>
            <input
              type="number"
              step="any"
              placeholder="Enter the Expense Amount"
              onChange={AmountHandler}
            />
          </div>
          <div className="new-expense__controls ">
            <label> Expense Date</label>
            <input
              type="date"
              placeholder="Enter the Expense Date"
              onChange={DateHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
