import "../css/SearchBar.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Søg..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
