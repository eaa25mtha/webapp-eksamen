import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import line from "../assets/whiteline.svg";
import star from "../assets/popupstar.svg";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import Favorite from "../components/Favorite";
import "../css/Detaljeside.css";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function BarDetailPage() {
  const [bar, setBar] = useState({});
  const params = useParams();
  const barId = Number(params?.id) || null;
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
      const barToDisplay = Array.isArray(data)
        ? data.find((b) => b?.id === barId)
        : null;
      setBar(barToDisplay || {});
    }
    loadBar();
  }, [barId]);

  //Her bliver alle properties koblet op på deres SVG
  const properties = [
    {
      field: "sport_prop",
      icon: `${import.meta.env.BASE_URL}props/sport.svg`,
    },
    {
      field: "pool_prop",
      icon: `${import.meta.env.BASE_URL}props/pool.svg`,
    },
    {
      field: "dart_prop",
      icon: `${import.meta.env.BASE_URL}props/dart.svg`,
    },
    {
      field: "sitdown_prop",
      icon: `${import.meta.env.BASE_URL}props/sitdown.svg`,
    },
    {
      field: "beer_prop",
      icon: `${import.meta.env.BASE_URL}props/beer.svg`,
    },
    {
      field: "spil_prop",
      icon: `${import.meta.env.BASE_URL}props/spil.svg`,
    },
    {
      field: "cocktails_prop",
      icon: `${import.meta.env.BASE_URL}props/cocktails.svg`,
    },
    {
      field: "dj_prop",
      icon: `${import.meta.env.BASE_URL}props/dj.svg`,
    },
    {
      field: "quiz_prop",
      icon: `${import.meta.env.BASE_URL}props/quiz.svg`,
    },
    {
      field: "floor_prop",
      icon: `${import.meta.env.BASE_URL}props/floor.svg`,
    },
    {
      field: "studierabat_prop",
      icon: `${import.meta.env.BASE_URL}props/studierabat.svg`,
    },
    {
      field: "livemusik_prop",
      icon: `${import.meta.env.BASE_URL}props/livemusik.svg`,
    },
    {
      field: "karaoke_prop",
      icon: `${import.meta.env.BASE_URL}props/karaoke.svg`,
    },
  ];

  return (
    <div className="bar-detail-page">
      <div className="header">
        {bar?.background_bar && (
          <img
            className="header-bg-img"
            src={bar.background_bar}
            alt={`${bar.name_bar} baggrund`}
            aria-hidden="true"
          />
        )}
        <div className="header-top">
          <img
            src={back}
            alt="Tilbage"
            onClick={() => navigate(-1)}
            className="back-button"
          />
          {/*<favorite komponenten ejer newValue så det ikke er lokalt storage, men gennem databasen />*/}
          <Favorite
            isFavorite={bar.favorite}
            barId={bar.id}
            onToggle={(newValue) =>
              setBar({
                ...bar,
                favorite: newValue,
              })
            }
          />
        </div>
        <div>
          {bar?.logo && (
            <img
              src={`${import.meta.env.BASE_URL}${bar.logo}`}
              alt={bar.name_bar ?? "Bar logo"}
              width={100}
            />
          )}
        </div>
      </div>
      <div className="bar-detail-info">
        <h1>{bar?.name_bar || ""}</h1>
        <div className="details">
          <p>{bar.type}</p>
          <img src={line} alt="linje" />
          <p>{bar.age_bar}</p>
        </div>
        <div className="details">
          <img src={star} alt="rating" />
          <p>{bar.rating_google_bar}</p>
        </div>
        <div className="details">
          <p>{bar.openstatus_bar}</p>
          <img src={line} alt="linje" />
          <p>{bar.openhours_bar}</p>
        </div>
        {bar && (
          <div className="properties">
            {properties.map((prop) =>
              bar[prop.field] ? (
                <div key={prop.field} className="property">
                  <img src={prop.icon} alt={prop.label ?? prop.field} />
                  <span>{prop.label ?? ""}</span>
                </div>
              ) : null,
            )}
          </div>
        )}
      </div>
    </div>
  );
}
