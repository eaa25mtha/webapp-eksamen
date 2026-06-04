import "../css/Chat.css";
import { useEffect, useState } from "react";

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
      <div>
        <h1>Bar chat</h1>
      </div>

      <div>
        <div>
          <div className="message-list">
            {messages.map((message) => (
              <li key={message.id}>
                <div className="message"> {message.text}</div>

                <button onClick={() => deleteMessage(message.id)}>Slet</button>
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

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
