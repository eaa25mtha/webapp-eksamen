import "../css/SearchBarToggle.css";
import SearchIcon from "../assets/nav/search.svg";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <img className="search-icon" src={SearchIcon} alt="Search" />
      <input
        className="search-input"
        type="text"
        placeholder="Søg..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
