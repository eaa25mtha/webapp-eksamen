import BarEventSwitch from "../components/BarEventSwitch";
import BarDisplay from "../components/BarDisplay";

export default function HomePage() {
  return (
    <div>
      <h1>Events denne uge</h1>
      <BarEventSwitch />
      <BarDisplay />
    </div>
  );
}
