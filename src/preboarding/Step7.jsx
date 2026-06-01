import "./css/Preboarding.css";
import ikon from "/step7.svg";

export default function Step7({ onFinish }) {
  return (
    <div className="step">
      <div className="top"></div>
      <div className="middle">
        <img src={ikon} alt="Step 7 Icon" />
        <div className="text-container">
          <h1>Nu er du klar til festen!</h1>
        </div>
      </div>
      <div className="bottom">
        <button onClick={onFinish}>Lad os komme igang!</button>
      </div>
    </div>
  );
}
