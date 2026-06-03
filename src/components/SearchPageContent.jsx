import { useState } from "react";
import MapDisplay from "./MapDisplay";
import SearchBarDisplay from "./SearchBarDisplay";
import SearchBar from "./SearchBar";
import "../css/SearchBar.css";

export default function SearchContent() {
  const [display, setDisplay] = useState("map");
  const [query, setQuery] = useState("");

  // skift til event
  function toggleDisplayEvent() {
    setDisplay("bar");
  }

  // skift til kort
  function toggleDisplayMap() {
    setDisplay("map");
  }

  return (
    //event/kort toggle
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="toggle-container">
        {/* css class der kun vises når bar er aktiv */}
        <button
          className={`toggle-button ${display === "bar" ? "active" : ""}`}
          onClick={toggleDisplayEvent}
        >
          <h3>Barer</h3>
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
