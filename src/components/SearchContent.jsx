import { useState } from "react";
import MapDisplay from "./MapDisplay";
import BarDisplay from "./BarDisplay";

export default function SearchContent() {
  const [display, setDisplay] = useState(true);

  function toggleDisplay() {
    setDisplay(!display);
  }

  return (
    <div>
      <button onClick={toggleDisplay}>
        <h2>Event</h2>
      </button>
      {display ? <MapDisplay /> : <BarDisplay />}
    </div>
  );
}
