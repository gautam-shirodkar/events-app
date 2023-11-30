import { getFilteredEvents } from "@/MOCK_DATA";
import EventsList from "@/components/events/EventsList";
import { useRouter } from "next/router";
import React from "react";
import Results from "@/components/events/Results";

export default function index() {
  const router = useRouter();
  const data = router.query.slug;
  if (!data) {
    return <>Loading</>;
  }

  const filteredEvents = getFilteredEvents({ year: data[0], month: data[1] });
  if (!filteredEvents.length) {
    return <>No Events</>;
  }

  return (
    <>
      <Results year={data[0]} month={data[1]} />
      <EventsList events={filteredEvents} />;
    </>
  );
}
