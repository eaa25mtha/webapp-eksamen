import "./css/Preboarding.css";
import logo from "/logo-white.svg";

export default function Step1({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Nu kan du nemt få overblik</h1>
      </div>
      <div className="middle">
        <div className="logo">
          <img src={logo} alt="PubHub" width="100%" />
        </div>
        <h3>Hele Aarhus' byliv i én app</h3>
      </div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
