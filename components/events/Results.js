import React from "react";
import Link from "next/link";
import classes from "./Results.module.scss";
import PreviousIcon from "../ui/icons/PreviousIcon";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function Results(props) {
  const { year, month } = props;
  return (
    <div className={classes.results}>
      <Link className={classes.link} href="/events">
        <PreviousIcon /> Back to All Events
      </Link>
      <h1 className={classes.title}>
        Events in {month !== "all" ? MONTHS[month] : ""}{" "}
        {year !== "all" ? year : ""}
      </h1>
    </div>
  );
}
