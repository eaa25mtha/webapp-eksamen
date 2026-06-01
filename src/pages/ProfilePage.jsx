import "../css/Profile.css";
import user from "../assets/user.svg";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div>
        <img className="user" src={user} alt="profilbillede" />
        <h1>Anders Andersen</h1>
        <button className="edit-profile-button">Rediger profil</button>
      </div>
      <div>
        <button className="button button1">Mine favoritter</button>
        <button className="button button2">Mine venner</button>
        <button className="button button3">Mine vouchers</button>
        <button className="button button4">Kontakt</button>
      </div>
    </div>
  );
}
