import { useState } from "react";
import EventDisplay from "./EventDisplay";
import BarDisplay from "./BarDisplay";
import "../css/SearchBarToggle.css";

export default function HomePageContent() {
  const [display, setDisplay] = useState("event");

  // skift til event
  function toggleDisplayEvent() {
    setDisplay("event");
  }

  // skift til kort
  function toggleDisplayBar() {
    setDisplay("bar");
  }

  // renderingen af indholdet og aktivering af de to states på knapperne
  return (
    <div>
      <div className="toggle-container">
        <button
          className={`toggle-button ${display === "bar" ? "active" : ""}`}
          onClick={toggleDisplayBar}
        >
          <h3>Barer</h3>
        </button>
        <button
          className={`toggle-button ${display === "event" ? "active" : ""}`}
          onClick={toggleDisplayEvent}
        >
          <h3>Events</h3>
        </button>
      </div>

      {display === "event" ? <EventDisplay /> : <BarDisplay />}
    </div>
  );
}
