import React, { useState } from "react";
import "./ExpenseForm.css";
<<<<<<< HEAD
const ExpenseForm = (props) => {
=======
const ExpenseForm = () => {
>>>>>>> 5e014a1076327517b792cf34120b297494a38e89
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

<<<<<<< HEAD
  //(t-7) Submitting the form
=======
  //(t-8) add all the details and show in screen from input field
>>>>>>> 5e014a1076327517b792cf34120b297494a38e89

  const TitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateHandler = (event) => {
    setenteredDate(event.target.value);
  };

<<<<<<< HEAD
  //form submit
=======
>>>>>>> 5e014a1076327517b792cf34120b297494a38e89
  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
<<<<<<< HEAD
    //that is comefrom parent (NewExpense) send the data (expenseData) to parent
    props.onSaveExpenseData(expenseData);
=======
    console.log(expenseData);
>>>>>>> 5e014a1076327517b792cf34120b297494a38e89
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
<<<<<<< HEAD
              step="any"
=======
>>>>>>> 5e014a1076327517b792cf34120b297494a38e89
              placeholder="Enter the Expense Amount"
              onChange={AmountHandler}
            />
          </div>
          <div className="new-expense__controls ">
            <label> Expense Date</label>
            <input
              type="date"
<<<<<<< HEAD
=======
              min="0.012019-01-01"
              max="2023-12-30"
>>>>>>> 5e014a1076327517b792cf34120b297494a38e89
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
