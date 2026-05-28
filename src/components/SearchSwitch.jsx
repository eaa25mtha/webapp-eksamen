import { useState } from "react";

import SwitchOn from "../assets/switchOn.svg";
import SwitchOff from "../assets/switchOff.svg";

export default function SearchSwitch() {
  const [active, setActive] = useState(true);

  return (
    <img
      src={active ? SwitchOn : SwitchOff}
      alt="switch"
      onClick={() => setActive(!active)}
    />
  );
}
