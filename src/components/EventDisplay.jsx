import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import "../css/Display.css";

import CategorySport from "./category-btns/CategorySport";
import CategoryNat from "./category-btns/CategoryNat";
import CategoryCocktail from "./category-btns/CategoryCocktail";
import CategoryBeer from "./category-btns/CategoryBeer";
import CategoryAndre from "./category-btns/CategoryAndre";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function EventDisplay() {
  const [bars, setBars] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

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

  function toggleFilter(category) {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((filter) => filter !== category);
      }

      return [...prevFilters, category];
    });
  }

  const knownTypes = ["Sportsbar", "Cocktailbar", "Natklub", "Ølbar"];

  const filteredBars =
    activeFilters.length === 0
      ? bars
      : bars.filter((bar) => {
          // normale filtre
          if (activeFilters.includes(bar.type)) {
            return true;
          }

          // ANDRE BARER
          if (
            activeFilters.includes("Andre") &&
            !knownTypes.includes(bar.type)
          ) {
            return true;
          }
          return false;
        });

  if (!bars) return <p>Loading...</p>;

  //det der vises på homepage fra vores component, BarCard
  return (
    <div className="display">
      <div className="filter-container">
        <CategorySport
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
        <CategoryNat
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
        <CategoryCocktail
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />

        <CategoryBeer
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
        <CategoryAndre
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
      </div>

      <div className="card-container">
        {filteredBars.map((bar) => (
          <EventCard key={bar.id} bar={bar} />
        ))}
      </div>
    </div>
  );
}
