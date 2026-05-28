import CategoryBeer from "./category-btns/CategoryBeer";
import CategoryCocktail from "./category-btns/CategoryCocktail";
import CategorySport from "./category-btns/CategorySport";
import CategoryNat from "./category-btns/CategoryNat";
import CategoryAndre from "./category-btns/CategoryAndre";

export default function CategoryScroll() {
  return (
    <div className="category-scroll">
      <CategoryBeer />
      <CategoryCocktail />
      <CategorySport />
      <CategoryNat />
      <CategoryAndre />
    </div>
  );
}
