import Link from "next/link";
import React from "react";
import classes from "./MainHeader.module.scss";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Events App</Link>
        {/* <img src="logo.png" alt="Logo" /> */}
      </div>
      <nav className={classes.main_nav}>
        <ul>
          <li>
            <Link className={classes.link_item} href="/events/">
              All Events
            </Link>
          </li>
          {/* <li>
            <a href="#">About</a>
          </li> */}
          {/* <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
