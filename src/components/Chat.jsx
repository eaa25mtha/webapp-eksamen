import "../css/Chat.css";
import { useEffect, useState } from "react";
import trash from "../assets/trash.svg";
import send from "../assets/send.svg";

// env variabler
const URL = import.meta.env.VITE_SUPABASE_URL + "/messages";
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // hent beskeder
  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch(URL, {
          headers: {
            apikey: APIKEY,
            Authorization: `Bearer ${APIKEY}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Fejl ved hentning af beskeder:", error);
      }
    }

    loadMessages();
  }, []);

  // send besked
  async function sendMessage() {
    if (!input.trim()) return;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          apikey: APIKEY,
          Authorization: `Bearer ${APIKEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          text: input,
        }),
      });

      if (!response.ok) {
        throw new Error("Kunne ikke sende besked");
      }

      const newMessage = await response.json();

      // tilføj den nye besked til state
      setMessages((prevMessages) => [...prevMessages, ...newMessage]);

      setInput("");
    } catch (error) {
      console.error("Fejl ved afsendelse:", error);
    }
  }

  //slet besked
  async function deleteMessage(id) {
    try {
      const response = await fetch(`${URL}?id=eq.${id}`, {
        method: "DELETE",
        headers: {
          apikey: APIKEY,
          Authorization: `Bearer ${APIKEY}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Kunne ikke slette besked");
      }

      // opdater state lokalt
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id),
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="chat-container">
      <div className="header">
        <h1>Herr Bartels chat</h1>
      </div>

      <div>
        <div className="message-container">
          <div className="message-list">
            {messages.map((message) => (
              <li key={message.id}>
                <div className="besked-kasse">
                  <div className="message"> {message.text}</div>

                  <button
                    className="trash"
                    onClick={() => deleteMessage(message.id)}
                  >
                    <img src={trash} alt="slet" />
                  </button>
                </div>
                <div>
                  <p>{message.created_time}</p>
                </div>
              </li>
            ))}
          </div>
        </div>
        <div>
          <div className="send-besked">
            <input
              type="text"
              value={input}
              className="input"
              placeholder="Aa"
              onChange={(e) => setInput(e.target.value)}
            />

            <button className="send" onClick={sendMessage}>
              <img src={send} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
