import { Link } from "react-router-dom";
import "../css/Display.css";

export default function BarCard({ bar }) {
  const typeClass = bar.type
    ? bar.type.toLowerCase().replace(/\s+/g, "-")
    : "default";

  return (
    <Link to={`/${bar.name_bar}`} className={`card ${typeClass}`}>
      <div className="card-body">
        <div className="container-left">
          <h2>{bar.name_bar || "Intet bar navn"}</h2>
          <p>{bar.type || "Ingen angiven type"} 0,3 km</p>
          <p>{bar.rating_card || "Ingen ratings"}</p>
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
