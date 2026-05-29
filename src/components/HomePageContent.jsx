import { useState } from "react";
import EventDisplay from "./EventDisplay";
import BarDisplay from "./BarDisplay";

export default function HomePageContent() {
  const [display, setDisplay] = useState(true);

  function toggleDisplay() {
    setDisplay(!display);
  }

  return (
    <div>
      <button onClick={toggleDisplay}>
        <h2>Event</h2>
      </button>
      {display ? <EventDisplay /> : <BarDisplay />}
    </div>
  );
}
