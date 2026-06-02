import "../css/Profile.css";
import user from "../assets/user.svg";
import { Link } from "react-router";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div>
        <img className="user" src={user} alt="profilbillede" />
        <h1>Anders Andersen</h1>
        <button className="edit-profile-button">Rediger profil</button>
      </div>
      <div>
        <Link to="/favorites">
          <button className="button button1">Mine favoritter</button>
        </Link>
        <Link to="/friends">
          <button className="button button2">Mine venner</button>
        </Link>
        <Link to="/vouchers">
          <button className="button button3">Mine vouchers</button>
        </Link>
        <Link to="/contact">
          <button className="button button4">Kontakt</button>
        </Link>
      </div>
    </div>
  );
}
