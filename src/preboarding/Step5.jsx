import "./css/Preboarding.css";
//import preboardingKort from "../assets/preboardingKort.svg";
import signUp1 from "../assets/signUp1.svg";
import signUp2 from "../assets/signUp2.svg";
import signUp3 from "../assets/signUp3.svg";
import user from "../assets/user.svg";

export default function Step5({ onNext }) {
  return (
    <div className="step">
      <div className="top">
        <h1>Find dine venner</h1>
      </div>
      <div className="middle step5-middle">
        <img className="step5-user" src={user} alt="profilbillede" />
        <img src={signUp1} alt="Google sign up" />
        <img src={signUp2} alt="Facebook sign up" />
        <img src={signUp3} alt="Instagram sign up" />
      </div>
      <div className="bottom">
        <button className="step5-button" onClick={onNext}>
          Gør det senere
        </button>
      </div>
    </div>
  );
}
