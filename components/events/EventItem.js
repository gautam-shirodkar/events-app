import React from "react";
import classes from "./EventItem.module.scss";
import LinkButton from "../ui/butttons/LinkButton";
import DateIcon from "../ui/icons/DateIcon";
import LocationIcon from "../ui/icons/LocationIcon";
import NextIcon from "../ui/icons/NextIcon";

export default function EventItem({ event }) {
  const { id, title, date, location, image, description } = event;
  const displayDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // const displayDescription = description.substring(0, 200);
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.card}>
      <img src={`https://source.unsplash.com/random/${id}`} />
      <div className={classes.card__content}>
        <h3 className={classes.title}>{title}</h3>
        {/* <p className={classes.description}>{displayDescription}</p> */}
        <p className={classes.location}>
          <LocationIcon />
          {location}
        </p>
        <p className={classes.date}>
          <DateIcon />
          {displayDate}
        </p>
        <LinkButton link={exploreLink}>
          <span>Explore Event</span>
          <span>
            <NextIcon />
          </span>
        </LinkButton>
      </div>
    </li>
  );
}
