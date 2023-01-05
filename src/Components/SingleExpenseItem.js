import React from "react";

function SingleExpenseItem(props) {
  const DeleteOItemHandler = () => {
    const para = document.getElementById(props.item.id);
    para.remove();
  };
  return (
    <div id={props.item.id} className="Expense-item">
      <div className="Expense-date">
        <div className="Item-month">{props.time.Month} </div>
        <div className="Item-year">{props.time.year} </div>
        <div className="Item-day">{props.time.Day} </div>
      </div>
      <h3 className="Expense-Item-title">{props.item.title}</h3>
      <div className="Expense-Item-amount">{props.item.amount}</div>
      <button onClick={DeleteOItemHandler}>Remove</button>
    </div>
  );
}

export default SingleExpenseItem;
