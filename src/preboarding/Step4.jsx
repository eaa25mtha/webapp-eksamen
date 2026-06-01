import "./css/Preboarding.css";
import preboardingKort from "../assets/preboardingKort.svg";

export default function Step4({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Se barer nær dig</h1>
      </div>
      <div className="middle kort">
        <img src={preboardingKort} alt="Kort" />
        <div className="text-container">
          <h3>Med delt lokation kan du se alle barerene nær dig</h3>
        </div>
      </div>
      <div className="bottom step4-bottom">
        <p2 className="later-btn" onClick={onNext}>
          Gør det senere
        </p2>
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
