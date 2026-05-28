import { useId } from "react";
import "../../css/category-btns/CategoryAndre.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategoryAndre() {
  const id = useId(); /*spørg race hvorfor vi bruger useId?*/
  return (
    <>
      <label htmlFor={id} className="category-andre">
        <input id={id} type="checkbox" className="category-checkbox" />
        <span className="category-content-andre">
          <span className="category-name">Andre Barer</span>
          <span className="category-cancel">
            <img src={cancelIcon} alt="cancel" />
          </span>
        </span>
      </label>
    </>
  );
}
