import "../css/SearchBar.css";
//import searchIcon from "../assets/nav/search.svg";
import filterKnap from "../assets/filterKnap.svg";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Søg..." />
      <button
        type="button"
        className="filter-button"
        onClick={() => console.log("Filterknap klikket")}
        aria-label="Åbn filter"
      >
        <img src={filterKnap} alt="Filter" />
      </button>
    </div>
  );
}
