import { useState } from "react";
import leftOn from "../assets/svgs/left-stage-on.svg";
import leftOff from "../assets/svgs/left-stage-off.svg";
import rightOn from "../assets/svgs/right-stage-on.svg";
import rightOff from "../assets/svgs/right-stage-off.svg";

export default function BarEventSwitch({
  initial = "left",
  onChange,
  leftHref,
  rightHref,
}) {
  const [active, setActive] = useState(initial); //gemmer hvilket state der er aktivt

  function activate(side) {
    if (side === active) return; //hvis brugeren klikker på den aktive side sker der intet
    setActive(side);
    if (onChange) onChange(side);
  }

  return (
    <div className="bar-switch" role="tablist" aria-label="Bar event switch">
      {leftHref ? (
        <a
          className={`switch-btn ${active === "left" ? "active" : ""}`}
          href={leftHref}
          onClick={() => activate("left")}
          aria-pressed={active === "left"}
        >
          <img src={active === "left" ? leftOn : leftOff} alt="Left stage" />
        </a>
      ) : (
        <button
          className={`switch-btn ${active === "left" ? "active" : ""}`}
          type="button"
          onClick={() => activate("left")}
          aria-pressed={active === "left"}
        >
          <img src={active === "left" ? leftOn : leftOff} alt="Left stage" />
        </button>
      )}
      {rightHref ? (
        <a
          className={`switch-btn ${active === "right" ? "active" : ""}`}
          href={rightHref}
          onClick={() => activate("right")}
          aria-pressed={active === "right"}
        >
          <img
            src={active === "right" ? rightOn : rightOff}
            alt="Right stage"
          />
        </a>
      ) : (
        <button
          className={`switch-btn ${active === "right" ? "active" : ""}`}
          type="button"
          onClick={() => activate("right")}
          aria-pressed={active === "right"}
        >
          <img
            src={active === "right" ? rightOn : rightOff}
            alt="Right stage"
          />
        </button>
      )}
    </div>
  );
}
