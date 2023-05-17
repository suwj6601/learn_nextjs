import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>

      {events.length === 0 && <h3>No events to show</h3>}
      {events?.data?.map((evt) => (
        <EventItem key={evt.id} evt={evt}>
          {evt.name}
        </EventItem>
      ))}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/evt?populate=*`);
  const events = await res.json();

  return {
    props: { events },
    // revalidate: 1,
  };
};
