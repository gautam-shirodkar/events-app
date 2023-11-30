import { useRouter } from "next/router";
import { getAllEvents } from "@/MOCK_DATA";
import EventFilters from "@/components/events/EventFilters";
import EventsList from "@/components/events/EventsList";

export default function Index() {
  const allEvents = getAllEvents();
  const router = useRouter();
  const handleFilter = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <>
      <EventFilters onFilter={handleFilter} />
      <EventsList events={allEvents} />
    </>
  );
}
