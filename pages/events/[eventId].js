import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/MOCK_DATA";
import EventDetails from "@/components/events/EventDetails";

export default function index() {
  const router = useRouter();
  const eventId = router.query.eventId;
  console.log(eventId);
  const selectedEvent = getEventById(eventId);
  console.log(selectedEvent);
  if (!selectedEvent) {
    return <> Event Not Found</>;
  }
  return <EventDetails event={selectedEvent} />;
}
