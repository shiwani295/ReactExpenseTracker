import { useState } from "react";
import "./ExpenseItem.css";
import SingleExpenseItem from "./SingleExpenseItem";
import ExpFilter from "./Year_ExpenseFilter/ExpFilter";

function ExpenseItem(props) {
  //this is for select year
  const [filteredYear, setFiltered] = useState();
  const filterChangeHandler = (selectedYear) => {
    setFiltered(selectedYear);
  };

  const filteredExpense = props.ExpData.filter((selectedYear) => {
    return selectedYear.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      {props.ExpData.length > 0 && (
        <div className="Parent-div">
          <ExpFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {filteredExpense.map((item) => {
            console.log(item);
            const year = item.date.getFullYear();
            const Month = item.date.toLocaleDateString("en-US", {
              month: "long",
            });
            const Day = item.date.toLocaleDateString("en-US", {
              day: "numeric",
            });
            return (
              <>
                <SingleExpenseItem
                  item={item}
                  key={item.id}
                  time={{ year, Month, Day }}
                />
                ;
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
export default ExpenseItem;
