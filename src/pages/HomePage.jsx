import HomePageContent from "../components/HomePageContent";
import "../css/styles.css";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Events denne uge</h1>
      <HomePageContent />
    </div>
  );
}
