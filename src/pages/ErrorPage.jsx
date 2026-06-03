import ErrorContent from "../components/ErrorContent";
import "../css/styles.css";

export default function ErrorPage() {
  return (
    <div className="container">
      <h1>404 - Not Found</h1>
      <ErrorContent />
    </div>
  );
}
