import SearchSwitch from "../components/SearchSwitch";
import EventDisplay from "../components/EventDisplay";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
  return (
    <div>
      <SearchBar />
      <SearchSwitch />
      <EventDisplay />
    </div>
  );
}
