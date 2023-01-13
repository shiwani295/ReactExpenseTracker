import React, { useState } from "react";

function SingleExpenseItem(props) {
  const DeleteOItemHandler = () => {
    const para = document.getElementById(props.item.id);
    para.remove();
  };

  const [amount, setAmount] = useState(props.item.amount);
  const UpdateItemHandler = () => {
    setAmount("$100");
    document.getElementsByClassName("Expense-Item-amount");
  };

  return (
    <div id={props.item.id} className="Expense-item">
      <div className="Expense-date">
        <div className="Item-month">{props.time.Month} </div>
        <div className="Item-year">{props.time.year} </div>
        <div className="Item-day">{props.time.Day} </div>
      </div>
      <div>
        <h3 className="Expense-Item-title">{props.item.title}</h3>
        <div className="Expense-Item-amount">{amount}</div>

        <div className="Deletebutton" style={{ float: "right" }}>
          <button onClick={DeleteOItemHandler}>Remove</button>
        </div>

        <div className="Updatebutton">
          <button onClick={UpdateItemHandler}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default SingleExpenseItem;
