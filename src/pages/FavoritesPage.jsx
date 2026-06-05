import { useState, useEffect } from "react";
import BarCard from "../components/BarCard";
import "../css/Display.css";
import ErrorContent from "../components/ErrorContent";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function FavoritesPage() {
  const [bars, setBars] = useState([]);
  const navigate = useNavigate();

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
    return (
      <div className="container">
        <div className="header-fav">
          <img
            src={back}
            alt="Tilbage"
            onClick={() => navigate(-1)}
            className="back-button"
          />
          <h1>Mine Favoritter</h1>
        </div>
        <ErrorContent />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header-fav">
        <img
          src={back}
          alt="Tilbage"
          onClick={() => navigate(-1)}
          className="back-button"
        />
        <h1>Mine Favoritter</h1>
      </div>
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
