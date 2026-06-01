import "./css/Preboarding.css";
//import Lottie from "lottie-react";
//import step2animation from "../../lottie.json/prop-carrusel.json";

export default function Step2({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Bytur gjort simpelt</h1>
      </div>
      <div className="middle"></div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
