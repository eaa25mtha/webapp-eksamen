import NotLiked from "../assets/NotLiked.svg";
import Liked from "../assets/Liked.svg";

const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

//funktionen henter baren, bruger PATCH til at ændre favoritknappen og opdaterer den i SupaBase
export default function Favorite({ isFavorite, barId, onToggle }) {
  async function toggleFavorite() {
    const newValue = !isFavorite;

    try {
      const response = await fetch(`${URL}?id=eq.${barId}`, {
        method: "PATCH",
        headers: {
          apikey: APIKEY,
          Authorization: `Bearer ${APIKEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          favorite: newValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Kunne ikke opdatere favorit");
      }

      onToggle(newValue);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <img
      src={isFavorite ? Liked : NotLiked}
      alt={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      onClick={toggleFavorite}
    />
  );
}
