import { useState } from "react";
import Chat from "./Chat";
import back from "../assets/back.svg";
import "../css/Chat.css";

export default function ChatDisplay() {
  const [activeChat, setActiveChat] = useState(false);

  if (!activeChat) {
    return (
      <div>
        <button onClick={() => setActiveChat(!activeChat)}>
          Herr Bartels chat
        </button>
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
