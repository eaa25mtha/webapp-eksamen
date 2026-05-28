import { useState } from "react";

import SwitchOn from "../assets/switchOn2.svg";
import SwitchOff from "../assets/switchOff2.svg";

export default function BarEventSwitch() {
  const [active, setActive] = useState(true);

  return (
    <img
      src={active ? SwitchOn : SwitchOff}
      alt="switch"
      onClick={() => setActive(!active)}
    />
  );
}
