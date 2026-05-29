import { Link } from "react-router-dom";
import "../css/Display.css";

export default function EventCard({ event }) {
  return (
    <Link to={`/${event.event_name}`} className="card">
      {event.event_image ? (
        <img src={event.event_image} alt={event.event_name} />
      ) : (
        <div className="image-placeholder">?</div>
      )}
      <div className="card-body">
        <h2>{event.event_name || "Intet event navn"}</h2>
        <h2>{event.event_time || "Ingen angiven tid"}</h2>
        <p>
          {event.name_bar || "Ingen angiven bar"} - {event.type || ""}
        </p>
      </div>
    </Link>
  );
}
