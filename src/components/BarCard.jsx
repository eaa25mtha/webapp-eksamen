import { Link } from "react-router-dom";

export default function BarCard({ bar }) {
  return (
    <Link to={`/${bar.name_bar}`} className="bar-card">
      <div className="barcard-body">
        {bar.logo ? (
          <img src={bar.logo} alt={bar.name_bar} />
        ) : (
          <div className="image-placeholder">?</div>
        )}

        <h2>{bar.name_bar || "Intet bar navn"}</h2>
        <p>{bar.type || "Ingen angiven type"} 0,3 km</p>
        <p>{bar.rating_card || "Ingen ratings"}</p>
      </div>
    </Link>
  );
}
