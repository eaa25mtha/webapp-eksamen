// filepath: /Users/millelauridsen/Desktop/Programmering/1. semester/GitHub/webapp-eksamen/src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import App from "./App.jsx";

function updateRootScale() {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scale = Math.min(1, vw / 390, vh / 844);
  rootEl.style.transform = `scale(${scale})`;
  rootEl.style.transformOrigin = "center center";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// set initial scale and update on resize
updateRootScale();
window.addEventListener("resize", updateRootScale);
