import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/MOCK_DATA";
import EventDetails from "@/components/events/EventDetails";

export default function Index() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const selectedEvent = getEventById(eventId);
  if (!selectedEvent) {
    return <> Event Not Found</>;
  }
  return <EventDetails event={selectedEvent} />;
}
