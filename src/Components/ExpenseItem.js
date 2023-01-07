import "./ExpenseItem.css";
import SingleExpenseItem from "./SingleExpenseItem";
function ExpenseItem(props) {
  return (
    <div className="Parent-div">
      <div className="Add-New-Expense">Add New Expenses </div>
      <br></br>

      {props.ExpData.map((item) => {
        const year = item.date.getFullYear();
        const Month = item.date.toLocaleDateString("en-US", { month: "long" });
        const Day = item.date.toLocaleDateString("en-US", { day: "numeric" });
        return (
          <SingleExpenseItem
            item={item}
            key={item.id}
            time={{ year, Month, Day }}
          />
        );
      })}
    </div>
  );
}
export default ExpenseItem;
