import { useState } from "react";
import MapDisplay from "./MapDisplay";
import SearchBarDisplay from "./SearchBarDisplay";
import SearchBar from "./SearchBar";

export default function SearchContent() {
  const [display, setDisplay] = useState(true);
  const [query, setQuery] = useState("");

  function toggleDisplay() {
    setDisplay(!display);
  }

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <button onClick={toggleDisplay}>
        <h2>Event</h2>
      </button>
      {display ? (
        <MapDisplay query={query} />
      ) : (
        <SearchBarDisplay query={query} />
      )}
    </div>
  );
}
