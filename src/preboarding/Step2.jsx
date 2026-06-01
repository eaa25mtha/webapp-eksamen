import "./css/Preboarding.css";
import LottieModule from "lottie-react";
import step2animation from "../animations/prop-carrusel.json";

export default function Step2({ onNext }) {
  const Lottie = LottieModule.default;

  return (
    <div className="step">
      <div className="top">
        <h1>Bytur gjort simpelt</h1>
      </div>
      <div className="middle">
        <div className="lottie-container">
          {" "}
          <Lottie animationData={step2animation} loop />
        </div>
        <h3>Se på ikonerne, hvad de forskellige barer tilbyder</h3>
      </div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
