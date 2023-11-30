import React from "react";
import EventItem from "./EventItem";
import classes from "./EventsList.module.scss";

export default function EventsList(props) {
  const { events } = props;
  return (
    <ul className={classes.card_list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
