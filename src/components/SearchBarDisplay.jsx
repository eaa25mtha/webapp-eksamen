import "../css/SearchBar.css";
import { useState, useEffect } from "react";
import BarCard from "./BarCard";
import EventCard from "./EventCard";
import "../css/Display.css";
import ErrorContent from "./ErrorContent";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function SearchBarDisplay({ query }) {
  const [bars, setBars] = useState([]);

  //henter data på barerne
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

  const filteredBars = bars.filter(
    (bar) =>
      bar.name_bar?.toLowerCase().includes(query.toLowerCase()) ||
      bar.type?.toLowerCase().includes(query.toLowerCase()) ||
      bar.event_name?.toLowerCase().includes(query.toLowerCase()),
  );
  if (filteredBars.length === 0) {
    return <ErrorContent />;
  }

  return (
    <div>
      <div className="card-container">
        {filteredBars.map((bar) => (
          <div key={bar.id}>
            {(bar.name_bar?.toLowerCase().includes(query.toLowerCase()) ||
              bar.type?.toLowerCase().includes(query.toLowerCase())) && (
              <BarCard bar={bar} />
            )}
            {bar.event_name?.toLowerCase().includes(query.toLowerCase()) && (
              <EventCard bar={bar} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
