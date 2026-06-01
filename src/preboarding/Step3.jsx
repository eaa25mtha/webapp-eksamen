// ...existing code...
import "../preboarding/css/Preboarding.css";
import LottieModule from "lottie-react";

import carousel1 from "../animations/carousel1.json";
import carousel2 from "../animations/carousel2.json";
import carousel3 from "../animations/carousel3.json";

export default function Step3({ onNext }) {
  const Lottie = LottieModule.default;

  return (
    <div className="step">
      <div className="top">
        <h1>Find events</h1>
      </div>
      <div className="middle">
        <div className="lottie-container carousel">
          {" "}
          <Lottie animationData={carousel3} loop />{" "}
          <Lottie animationData={carousel1} loop />{" "}
          <Lottie animationData={carousel2} loop />
        </div>
        <div className="text-container">
          <h3>
            Kig i vores event cards og find den helt rigtige aktivitet til dig
          </h3>
        </div>
      </div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
