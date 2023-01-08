import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //(t-8) add all the details and show in screen from input field

  const TitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    console.log(expenseData);
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
              placeholder="Enter the Expense Amount"
              onChange={AmountHandler}
            />
          </div>
          <div className="new-expense__controls ">
            <label> Expense Date</label>
            <input
              type="date"
              min="0.012019-01-01"
              max="2023-12-30"
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
