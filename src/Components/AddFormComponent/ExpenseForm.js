import React, { useState } from "react";
import "./ExpenseForm.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
const ExpenseForm = () => {
  //(t-6) using one state onstead of multiple state
  const [UserInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate,
  });
  const TitleHandler = (event) => {
    setUserInput({
      ...UserInput,
      enteredTitle: event.target.value,
    });
  };

  const AmountHandler = (event) => {
    setUserInput({
      ...UserInput,
      enteredAmount: event.target.value,
    });
  };
  const DateHandler = (event) => {
    setUserInput({
      ...UserInput,
      enteredDate: event.target.value,
    });
    //setenteredDate(event.target.value);
  };
  // (t-6)
  return (
    <div className="ExpForm">
      <form>
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
              type="text"
              placeholder="Enter the Expense Amount"
              onChange={AmountHandler}
            />
          </div>
          <div className="new-expense__controls ">
            <label> Expense Date</label>
            <input
              type="number"
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

      {/* <div className="ExpenseForm">
        <h2>ExpenseForm</h2>
        <div className="ExpenseTitle">
          <label>Expense title &nbsp;&nbsp;</label>
          <input
            type="text"
            placeholder="Enter the Expense title...."
            onChange={TitleHandler}
            value=""
            id="Exptitle"
          ></input>
        </div>
        <div className="ExpenseTitle">
          <label>Expense Amount &nbsp;&nbsp;</label>
          <input
            type="number"
            placeholder="Enter the Expense Amount...."
            id="ExpAmount"
            onChange={AmountHandddler}
          ></input>
        </div>
        <div className="ExpenseTitle">
          <label>Expense title &nbsp;&nbsp;</label>
          <input
            type="date"
            placeholder="Enter the Expense date...."
            id="ExpsDate"
            onChange={DateHandler}
          ></input>
        </div>
        <button>Submit</button>
      </div> */}
    </div>
  );
};

export default ExpenseForm;
