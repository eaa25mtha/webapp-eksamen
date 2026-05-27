import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
export default function NavBar() {
  return (
    <>
      <h1>My Website</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </>
  );
}
