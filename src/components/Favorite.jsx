import { useState } from "react";
import NotLiked from "../assets/NotLiked.svg";
import Liked from "../assets/Liked.svg";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function Favorite({ bar }) {
  const [isFavorite, setIsFavorite] = useState(bar.favorite);

  const toggleFavorite = async () => {
    const newValue = !isFavorite;

    try {
      const response = await fetch(`${URL}?id=eq.${bar.id}`, {
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

      setIsFavorite(newValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <img
        src={isFavorite ? Liked : NotLiked}
        alt={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        onClick={toggleFavorite}
      />
    </div>
  );
}
