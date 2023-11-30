import React from "react";
import Link from "next/link";
import classes from "./LinkButtton.module.scss";

export default function LinkButton(props) {
  const { link, children } = props;
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
}
