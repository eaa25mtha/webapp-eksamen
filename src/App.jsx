import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";
import Preboarding from "./preboarding/Preboarding";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const hasSeen = sessionStorage.getItem("seen");

    if (!hasSeen) {
      sessionStorage.setItem("seen", "true");
      return true;
    }

    return false;
  });

  function closeOnboarding() {
    setShowOnboarding(false);
  }

  return (
    <>
      {showOnboarding ? (
        <Preboarding onFinish={closeOnboarding} />
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>

          <NavBar />
        </div>
      )}
    </>
  );
}
