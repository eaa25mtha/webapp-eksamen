import { Link } from "react-router-dom";
import "../css/Display.css";

//hvis baren ikke har en class i css får den en default, den skal ikke være case sensitive
export default function EventCard({ bar }) {
  const typeClass = bar.type
    ? bar.type.toLowerCase().replace(/\s+/g, "-")
    : "default";

  //event cardets properties hentes fra supabase med template literals
  return (
    <Link to={`/bar/${bar.id}`} className={`card ${typeClass}`}>
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
            <img
              src={`${import.meta.env.BASE_URL}${bar.logo}`}
              alt={bar.name_bar}
            />
          ) : (
            <div className="image-placeholder">?</div>
          )}
        </div>
      </div>
    </Link>
  );
}
