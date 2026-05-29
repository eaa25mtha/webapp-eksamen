import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <>
      <div className="onboarding">
        <h1>Welcome to the Bar Finder</h1>
        <p>Find the best bars in your area</p>
      </div>

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>{" "}
        <NavBar />
      </div>
    </>
  );
}
