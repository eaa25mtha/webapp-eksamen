import { useState, useEffect } from "react";
import MapDisplay from "./MapDisplay";
import SearchBarDisplay from "./SearchBarDisplay";
import SearchBar from "./SearchBar";
import "../css/SearchBarToggle.css";

export default function SearchContent() {
  const [display, setDisplay] = useState(() => {
    return localStorage.getItem("display") || "map"; //local storage, hvis der er gemt en værdi, så brug den
  });
  const [query, setQuery] = useState("");

  //når display ændres, gemmes den nye værdi
  useEffect(() => {
    localStorage.setItem("display", display);
  }, [display]);

  // skift til event
  function toggleDisplayEvent() {
    setDisplay("bar");
  }

  // skift til kort
  function toggleDisplayMap() {
    setDisplay("map");
  }

  // renderingen af indholdet og aktivering af de to states på knapperne
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="toggle-container">
        <button
          className={`toggle-button ${display === "bar" ? "active" : ""}`}
          onClick={toggleDisplayEvent}
        >
          <h3>Søg</h3>
        </button>
        <button
          className={`toggle-button ${display === "map" ? "active" : ""}`}
          onClick={toggleDisplayMap}
        >
          <h3>Kort</h3>
        </button>
      </div>

      {/* renderingen af kortet */}
      {display === "map" ? (
        <MapDisplay query={query} />
      ) : (
        <SearchBarDisplay query={query} />
      )}
    </div>
  );
}
