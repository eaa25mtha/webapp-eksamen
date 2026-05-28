import { Link } from "react-router-dom";

export default function EventCard({ bar }) {
  return (
    <Link to={`/${bar.event_name}`} className="event-card">
      {bar.event_image ? (
        <img src={bar.event_image} alt={bar.event_name} />
      ) : (
        <div className="image-placeholder">?</div>
      )}
      <div className="eventcard-body">
        <h2>{bar.event_name || "Intet event navn"}</h2>
        <h2>{bar.event_time || "Ingen angiven tid"}</h2>
        <p>
          {bar.name_bar || "Ingen angiven bar"} - {bar.type || ""}
        </p>
      </div>
    </Link>
  );
}
