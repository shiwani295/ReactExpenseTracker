import React, { useState } from "react";
import NewExpense from "./Components/AddFormComponent/NewExpense";
import ExpenseItem from "./Components/Expense/ExpenseItem";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpense] = useState(Dummy_expenses);

  // here parent app.js  and child newExpense (we get data child to parent)
  const AddExpenseHandler = (expense) => {
    // task 10  you get the data from (form) and when sumbit the form show the data in form
    setExpense((prevExpense) => [...prevExpense, expense]);
    // console.log(data);
  };
  return (
    <>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <ExpenseItem ExpData={expenses} />

      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
export default App;
