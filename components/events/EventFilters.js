import React, { useRef } from "react";

import classes from "./EventFilters.module.scss";

export default function EventFilters(props) {
  const yearRef = useRef();
  const monthRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const year = yearRef.current.value;
    const month = monthRef.current.value;
    if (year === "all" && month === "all") {
      return;
    }
    props.onFilter(year, month);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.filter_menu}>
        <label for="year">Year:</label>
        <select ref={yearRef} id="year">
          <option value="all">All</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>

        <label for="month">Month:</label>
        <select ref={monthRef} id="month">
          <option value="all">All</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>

        <button>Apply Filters</button>
      </div>
    </form>
  );
}
