import React, { useState } from "react";
import ExpFilter from "./ExpFilter";

const Expense = () => {
  const MyStyle = {
    backgroundColor: " #7ce7db",
    marginTop: "20px",
    marginLeft: "31px",
    marginRight: "31px",
    textAlign: "center",
    padding: "10px",
    fontSize: "20px",
    fontFamily: "fantasy",
  };
  const [filtered, setFiltered] = useState();
  const filterChangeHandler = (selectedYear) => {
    document.getElementById("getData").innerHTML = selectedYear;
    //setFiltered(selectedYear);
  };
  return (
    <>
      <div>
        <ExpFilter selected={filtered} onChangeFilter={filterChangeHandler} />
        <div className="getYear" id={"getData"} style={MyStyle}></div>
      </div>
    </>
  );
};

export default Expense;
