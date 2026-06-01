import "./css/Preboarding.css";

export default function Step1({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Nu kan du nemt få overblik</h1>
      </div>
      <div className="middle">
        <div className="logo">
          <img src="../../public/logo-white.svg" alt="PubHub" width="100%" />
        </div>
        <h3>Se på ikonerne, hvad de forskellige barer tilbyder</h3>
      </div>
      <div className="bottom">
        <button onClick={onNext}>Næste</button>
      </div>
    </div>
  );
}
