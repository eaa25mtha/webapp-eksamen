import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "../css/NavBar.css";
import homeIcon from "../assets/nav/home.svg";
import searchIcon from "../assets/nav/search.svg";
import chatIcon from "../assets/nav/chat.svg";
import profileIcon from "../assets/nav/profile.svg";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "home",
  );

  //gem state i local storage, brugerens valg gemmes ved reload
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <nav>
      <NavLink
        to="/"
        className={activeTab === "home" ? "active" : ""}
        onClick={() => setActiveTab("home")}
      >
        <img src={homeIcon} alt="Home" />
      </NavLink>

      <NavLink
        to="/search"
        className={activeTab === "search" ? "active" : ""}
        onClick={() => setActiveTab("search")}
      >
        <img src={searchIcon} alt="Search" />
      </NavLink>

      <NavLink
        to="/chat"
        className={activeTab === "chat" ? "active" : ""}
        onClick={() => setActiveTab("chat")}
      >
        <img src={chatIcon} alt="Chat" />
      </NavLink>

      <NavLink
        to="/profile"
        className={activeTab === "profile" ? "active" : ""}
        onClick={() => setActiveTab("profile")}
      >
        <img src={profileIcon} alt="Profile" />
      </NavLink>

      <span className="nav-indicator" aria-hidden="true" />
    </nav>
  );
}
