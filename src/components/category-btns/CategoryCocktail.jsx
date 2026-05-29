import { useId } from "react";
import "../../css/category-btns/CategoryCocktail.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategoryCocktail({
  activeFilters = [],
  toggleFilter = () => {},
}) {
  const id = useId(); /*spørg race hvorfor vi bruger useId?*/
  const isActive = activeFilters.includes("Cocktailbar");

  return (
    <>
      <label htmlFor={id} className="category-cocktail">
        <input
          id={id}
          type="checkbox"
          className="category-checkbox"
          checked={isActive}
          onChange={() => toggleFilter("Cocktailbar")}
        />
        <span className="category-content-cocktail">
          <span className="category-name">Cocktailbar</span>
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
