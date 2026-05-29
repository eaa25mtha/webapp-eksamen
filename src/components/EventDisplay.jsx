import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import "../css/Display.css";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function EventDisplay() {
  const [events, setEvents] = useState([]);

  //henter data med useEffect og fetch fra Supabase
  useEffect(() => {
    async function loadEvents() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setEvents(data);
    }
    loadEvents();
  }, []);

  if (!events) return <p>Loading...</p>;

  //det der vises på homepage fra vores component, BarCard
  return (
    <div className="display">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
