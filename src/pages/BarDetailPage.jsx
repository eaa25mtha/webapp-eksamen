import { useParams } from "react-router";
import { useEffect, useState } from "react";
import line from "../assets/whiteline.svg";
import star from "../assets/popupstar.svg";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import Favorite from "../components/Favorite";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function BarDetailPage() {
  const [bar, setBar] = useState({});
  const params = useParams();
  const barId = Number(params.id);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadBar() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const barToDisplay = data.find((bar) => bar.id === barId);
      setBar(barToDisplay);
    }
    loadBar();
  }, [barId]);

  const properties = [
    {
      field: "sport_prop",
      icon: "/props/sport.svg",
    },
    {
      field: "pool_prop",
      icon: "/props/pool.svg",
    },
    {
      field: "dart_prop",
      icon: "/props/dart.svg",
    },
    {
      field: "sitdown_prop",
      icon: "/props/sitdown.svg",
    },
    {
      field: "beer_prop",
      icon: "/props/beer.svg",
    },
    {
      field: "spil_prop",
      icon: "/props/spil.svg",
    },
    {
      field: "cocktails_prop",
      icon: "/props/cocktails.svg",
    },
    {
      field: "dj_prop",
      icon: "/props/dj.svg",
    },
    {
      field: "quiz_prop",
      icon: "/props/quiz.svg",
    },
    {
      field: "floor_prop",
      icon: "/props/floor.svg",
    },
    {
      field: "studierabat_prop",
      icon: "/props/studierabat.svg",
    },
    {
      field: "livemusik_prop",
      icon: "/props/livemusik.svg",
    },
    {
      field: "karaoke_prop",
      icon: "/props/karaoke.svg",
    },
  ];

  return (
    <div>
      <img
        src={back}
        alt="Tilbage"
        onClick={() => navigate(-1)}
        className="back-button"
      />
      <Favorite bar={bar} />
      <div>{/*<img src={bar.background_bar} alt={bar.name_bar} />*/}</div>
      <div>
        <img src={bar.logo} alt={bar.name_bar} />
      </div>
      <h1>{bar.name_bar}</h1>
      <div>
        <p>{bar.type}</p>
        <img src={line} alt="linje" />
        <p>{bar.age_bar}</p>
      </div>
      <div>
        <img src={star} alt="rating" />
        <p>{bar.rating_google_bar}</p>
      </div>
      <div>
        <p>{bar.openstatus_bar}</p>
        <img src={line} alt="linje" />
        <p>{bar.openhours_bar}</p>
      </div>
      <div className="properties">
        {properties.map((prop) =>
          bar[prop.field] ? (
            <div key={prop.field} className="property">
              <img src={prop.icon} alt={prop.label} />
              <span>{prop.label}</span>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
