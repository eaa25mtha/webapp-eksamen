import CategoryScroll from "../components/CategoryScroll";
import BarEventSwitch from "../components/BarEventSwitch";

export default function HomePage() {
  return (
    <div>
      <h1>Events denne uge</h1>
      <BarEventSwitch />
      <CategoryScroll />
    </div>
  );
}
