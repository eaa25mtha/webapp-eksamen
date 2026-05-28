import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import homeIcon from "../assets/nav/home.svg";
import searchIcon from "../assets/nav/search.svg";
import chatIcon from "../assets/nav/chat.svg";
import profileIcon from "../assets/nav/profile.svg";
export default function NavBar() {
  return (
    <>
      <h1>My Website</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img src={homeIcon} alt="Home" />
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img src={searchIcon} alt="Search" />
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img src={chatIcon} alt="Chat" />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img src={profileIcon} alt="Profile" />
        </NavLink>

        <span className="nav-indicator" aria-hidden="true" />
      </nav>
    </>
  );
}
