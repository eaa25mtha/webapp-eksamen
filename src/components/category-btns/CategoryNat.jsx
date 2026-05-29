import { useId } from "react";
import "../../css/category-btns/CategoryNat.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategoryNat({
  activeFilters = [],
  toggleFilter = () => {},
}) {
  const id = useId(); /*spørg race hvorfor vi bruger useId?*/

  const isActive = activeFilters.includes("Natklub");
  return (
    <>
      <label htmlFor={id} className="category-nat">
        <input
          id={id}
          type="checkbox"
          className="category-checkbox"
          checked={isActive}
          onChange={() => toggleFilter("Natklub")}
        />
        <span className="category-content-nat">
          <span className="category-name">Natklub</span>
          {isActive && (
            <span className="category-cancel">
              <img src={cancelIcon} alt="cancel" />
            </span>
          )}
        </span>
      </label>
    </>
  );
}
