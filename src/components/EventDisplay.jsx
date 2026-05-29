import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import "../css/Display.css";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function EventDisplay() {
  const [bars, setBars] = useState([]);

  //henter data med useEffect og fetch fra Supabase
  useEffect(() => {
    async function loadBars() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setBars(data);
    }
    loadBars();
  }, []);

  if (!bars) return <p>Loading...</p>;

  //det der vises på homepage fra vores component, BarCard
  return (
    <div className="display">
      <div className="card-container">
        {bars.map((bar) => (
          <EventCard key={bar.id} bar={bar} />
        ))}
      </div>
    </div>
  );
}
