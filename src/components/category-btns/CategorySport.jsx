import { useId } from "react";
import "../../css/category-btns/CategorySport.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategorySport({
  activeFilters = [],
  toggleFilter = () => {},
}) {
  const id = useId();

  const isActive = activeFilters.includes("Sportsbar");

  return (
    <label htmlFor={id} className="category-sport">
      <input
        id={id}
        type="checkbox"
        className="category-checkbox"
        checked={isActive}
        onChange={() => toggleFilter("Sportsbar")}
      />

      <span className="category-content-sport">
        <span className="category-name">Sportsbar</span>
        {isActive && (
          <span className="category-cancel">
            <img src={cancelIcon} alt="cancel" />
          </span>
        )}
      </span>
    </label>
  );
}
