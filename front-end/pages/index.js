import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>

      {events.length === 0 && <h3>No events to show</h3>}
      {events?.data?.map((evt) => (
        <EventItem key={evt.id} evt={evt}>
          {evt.name}
        </EventItem>
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch(`${API_URL}/evt?_sort=date:ASC&_limit=3`);
  const res = await fetch(`${API_URL}/evt?populate=*`);
  const events = await res.json();

  return {
    props: { events },
    // revalidate: 1,
  };
};
