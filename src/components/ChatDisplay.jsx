import { useState } from "react";
import Chat from "./Chat";
import back from "../assets/back.svg";
import "../css/Chat.css";

import adduser from "../assets/add-user.svg";
import online from "../assets/online.svg";

const HBikon = `${import.meta.env.BASE_URL}/bar_logoer/herrbartels.svg`;

export default function ChatDisplay() {
  const [activeChat, setActiveChat] = useState(false);

  if (!activeChat) {
    return (
      <div>
        <h1>Mine chats</h1>
        <div className="chat-list">
          <button
            className="chatbutton"
            onClick={() => setActiveChat(!activeChat)}
          >
            <img src={HBikon} alt="Herr Bartels chat" />
            <img className="online" src={online} alt="online" />
            <h3>Herr Bartels chat</h3>
          </button>

          <button className="chatbutton">
            <img src={adduser} alt="start ny chat" />
            <h3>Start ny chat</h3>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="chatDisplay">
      <button className="backbutton" onClick={() => setActiveChat(!activeChat)}>
        <img src={back} alt="tilbage" />
      </button>
      <Chat />
    </div>
  );
}
