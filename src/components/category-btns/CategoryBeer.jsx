import { useId } from "react";
import "../../css/category-btns/CategoryBeer.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategoryBeer({
  activeFilters = [],
  toggleFilter = () => {},
}) {
  const id = useId(); /*spørg race hvorfor vi bruger useId?*/
  const isActive = activeFilters.includes("Ølbar");

  return (
    <>
      <label htmlFor={id} className="category-beer">
        <input
          id={id}
          type="checkbox"
          className="category-checkbox"
          checked={isActive}
          onChange={() => toggleFilter("Ølbar")}
        />
        <span className="category-content-beer">
          <span className="category-name">Ølbar</span>
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
