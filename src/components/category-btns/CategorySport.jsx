import { useId } from "react";
import "../../css/category-btns/CategorySport.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategorySport() {
  const id = useId(); /*spørg race hvorfor vi bruger useId?*/
  return (
    <>
      <label htmlFor={id} className="category-sport">
        <input id={id} type="checkbox" className="category-checkbox" />
        <span className="category-content-sport">
          <span className="category-name">Sportsbar</span>
          <span className="category-cancel">
            <img src={cancelIcon} alt="cancel" />
          </span>
        </span>
      </label>
    </>
  );
}
