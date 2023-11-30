import React from "react";
import classes from "./EventDetails.module.scss";
import LocationIcon from "../ui/icons/LocationIcon";
import DateIcon from "../ui/icons/DateIcon";
export default function EventDetails({ event }) {
  return (
    <div className={classes.card_details}>
      <div class={classes.card_background}>
        <img
          src={`https://source.unsplash.com/random/${event.id}`}
          alt="Background Image"
        />
      </div>
      <div class={classes.card_content}>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>
          <LocationIcon /> {event.location}
        </p>
        <p>
          <DateIcon />
          {event.date}
        </p>
      </div>
    </div>
  );
}
