import { Link } from "react-router";

export default function ErrorContent() {
  return (
    <div>
      <h2>
        Det du søger efter, findes vist ikke endnu.. Prøv at søge efter noget
        andet eller{" "}
      </h2>
      <Link to="/">gå tilbage til forsiden</Link>
    </div>
  );
}
