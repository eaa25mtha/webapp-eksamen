import { useId } from "react";
import "../../css/category-btns/CategoryBeer.css";
import cancelIcon from "../../assets/cancel.svg";

export default function CategoryBeer() {
  const id = useId(); /*spørg race hvorfor vi bruger useId?*/
  return (
    <>
      <label htmlFor={id} className="category-beer">
        <input id={id} type="checkbox" className="category-checkbox" />
        <span className="category-content-beer">
          <span className="category-name">Ølbar</span>
          <span className="category-cancel">
            <img src={cancelIcon} alt="cancel" />
          </span>
        </span>
      </label>
    </>
  );
}
