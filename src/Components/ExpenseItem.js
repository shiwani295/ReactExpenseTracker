import "./ExpenseItem.css";
import SingleExpenseItem from "./SingleExpenseItem";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
function ExpenseItem(props) {
  const AddNewExpense = () => {
    alert("hello");
  };
  return (
    <div className="Parent-div">
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
