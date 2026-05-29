import { Link } from "react-router-dom";
import "../css/Display.css";

export default function EventCard({ bar }) {
  const typeClass = bar.type
    ? bar.type.toLowerCase().replace(/\s+/g, "-")
    : "default";

  return (
    <Link to={`/${bar.event_name}`} className={`card ${typeClass}`}>
      <div className="card-body">
        <div className="container-left">
          <h2 className="h2">{bar.event_name || "Intet event navn"}</h2>
          <h2 className="h2">{bar.event_time || "Ingen angiven tid"}</h2>
          <p>
            {bar.name_bar || "Ingen angiven bar"} - {bar.type || ""}
          </p>
        </div>
        <div className="container-right">
          {bar.logo ? (
            <img src={bar.logo} alt={bar.name_bar} />
          ) : (
            <div className="image-placeholder">?</div>
          )}
        </div>
      </div>
    </Link>
  );
}
