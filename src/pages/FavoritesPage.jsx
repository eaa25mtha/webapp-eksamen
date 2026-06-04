import { useState, useEffect } from "react";
import BarCard from "../components/BarCard";
import "../css/Display.css";
import ErrorContent from "../components/ErrorContent";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function FavoritesPage() {
  const [bars, setBars] = useState([]);

  //henter data på barerne
  useEffect(() => {
    async function loadBars() {
      const response = await fetch(URL + "/bars", {
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

  const filteredBars = bars.filter((bar) => bar.favorite === true);

  if (filteredBars.length === 0) {
    return <ErrorContent />;
  }

  return (
    <div className="container">
      <div className="card-container">
        {filteredBars.map((bar) => (
          <div className="card-container">
            <BarCard key={bar.id} bar={bar} />
          </div>
        ))}
      </div>
    </div>
  );
}
