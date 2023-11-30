import Head from "next/head";
import { getFeaturedEvents } from "../MOCK_DATA";
import EventsList from "@/components/events/EventsList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Events Next App</title>
        <meta name="description" content="Events app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <EventsList events={featuredEvents} />
      </div>
    </>
  );
}
