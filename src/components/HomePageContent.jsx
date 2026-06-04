import { useState, useEffect } from "react";
import EventDisplay from "./EventDisplay";
import BarDisplay from "./BarDisplay";
import "../css/SearchBarToggle.css";

export default function HomePageContent() {
  const [display, setDisplay] = useState(() => {
    return localStorage.getItem("display") || "event";
  });

  //når display ændres, gemmes den nye værdi
  useEffect(() => {
    localStorage.setItem("display", display);
  }, [display]);

  // skift til event
  function toggleDisplayEvent() {
    setDisplay("event");
  }

  // skift til kort
  function toggleDisplayBar() {
    setDisplay("bar");
  }

  // renderingen af indholdet og aktivering af de to states på knapperne
  // overskriften skifter med toggle knappen
  return (
    <div className="display-container">
      <h1>{display === "event" ? "Events denne uge" : "Barer nær dig"}</h1>
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
