import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import "../css/Map.css";
import L from "leaflet";
import line from "../assets/whiteline.svg";
import vibe1 from "../assets/vibe1.png";
import vibe2 from "../assets/vibe2.png";
import vibe3 from "../assets/vibe3.png";
import vibe4 from "../assets/vibe4.png";
import star from "../assets/popupstar.svg";

//env variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function MapDisplay() {
  const [bars, setBars] = useState([]);

  //henter data med useEffect og fetch fra Supabase
  useEffect(() => {
    async function loadBars() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setBars(data);
    }
    loadBars();
  }, []);

  return (
    <MapContainer
      center={[56.156, 10.208]} // Aarhus
      zoom={15}
      style={{
        height: "80vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {bars.map((bar) => (
        <Marker
          className="bar-marker"
          key={bar.id}
          position={[bar.latitude, bar.longitude]}
          icon={
            new L.Icon({
              iconUrl: bar.logo,
              iconSize: [56, 56],
              iconAnchor: [28, 28],
            })
          }
        >
          <Popup>
            <div className="popup-content">
              <h3>{bar.name_bar}</h3>
              <div className="bar-details">
                <div className="info-container">
                  <div className="info">
                    <img src={bar.logo} alt={bar.name_bar} />
                    <div>
                      <div className="info-details">
                        <p2>{bar.openstatus_bar}</p2>{" "}
                        <img src={line} alt="line" /> <p2>{bar.type}</p2>{" "}
                        <img src={line} alt="line" />
                        <p2>{bar.age_bar}</p2>
                      </div>
                      <div className="info-details">
                        <p2>
                          <img src={star} alt="rating" />
                          {bar.rating_card}
                        </p2>{" "}
                        <img src={line} alt="line" /> <p2>0,2 km</p2>
                      </div>
                    </div>
                  </div>
                  <div className="facilities">
                    <p2>Faciliteter</p2>
                    <div className="facilities-icons">
                      <img src={vibe1} alt="vibe" />
                      <img src={vibe2} alt="vibe" />
                      <img src={vibe3} alt="vibe" />
                      <img src={vibe4} alt="vibe" />
                    </div>
                  </div>
                </div>

                <div className="vibe-check">
                  <img src={vibe1} alt="vibe" />
                  <img src={vibe2} alt="vibe" />
                  <img src={vibe3} alt="vibe" />
                  <img src={vibe4} alt="vibe" />
                </div>
              </div>
            </div>
            <div className="read-more">
              <button>Læs mere</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
