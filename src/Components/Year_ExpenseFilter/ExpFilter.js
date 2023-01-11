import React from "react";
import "./ExpFilter.css";
const ExpFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    //console.log();
    props.onChangeFilter(event.target.value);
  };
  return (
    <>
      <div className="expense-filter">
        <div className="expense-filter_control">
          <label> filter by year </label>
          <select value={props.selected} onChange={dropDownChangeHandler}>
            <option value={"2020"}>2020</option>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
            <option value={"2023"}>2023</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpFilter;
