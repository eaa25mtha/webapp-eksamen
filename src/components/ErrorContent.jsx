import { Link } from "react-router";
import "../css/Error.css";
import LottieModule from "lottie-react";
import ErrorAnimation from "../animations/404jitter.json";

export default function ErrorContent() {
  const Lottie = LottieModule.default;

  return (
    <div className="error-content">
      <div className="error-text">
        <h2>
          Det, du søger efter, findes vist ikke endnu.. Prøv at søge efter noget
          andet eller
        </h2>
        <h2>
          <Link to="/">gå tilbage til forsiden</Link>
        </h2>
      </div>
      <div className="error-lottie">
        <div className="lottie-container">
          <Lottie
            animationData={ErrorAnimation}
            loop
            style={{
              width: "350px",
              height: "300px",
              transform: "translate(-30px 40px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
