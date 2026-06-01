import "../preboarding/css/Preboarding.css";
import Lottie from "lottie-react";

import carousel1 from "../animations/carousel1.json";
import carousel2 from "../animations/carousel2.json";
import carousel3 from "../animations/carousel3.json";

export default function Step3({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Find events</h1>
      </div>
      <div className="middle">
        <Lottie animationData={carousel1} loop={true} />
        <Lottie animationData={carousel2} loop={true} />
        <Lottie animationData={carousel3} loop={true} />
        <h3>
          Kig i vores event cards og find den helt rigtige aktivitet til dig
        </h3>
      </div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
