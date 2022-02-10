import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

import locationIcon from "./assets/location-pin.png";
import "./CurrentDay.scss";

const CurrentDay = ({
  weekdayPL,
  weekdayENG,
  datePL,
  dateENG,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => {
  const { pinkTheme, english } = useContext(AppContext);

  const weatherDescriptionPL = (weather) => {
    switch (weather) {
      case "Snow":
        return "Śnieg";
      case "Sleet":
        return "Śnieg z deszczem";
      case "Hail":
        return "Grad";
      case "Thunder":
        return "Burza";
      case "Heavy Rain":
        return "Ulewa";
      case "Light Rain":
        return "Lekki deszcz";
      case "Showers":
        return "Mrzawka";
      case "Heavy Cloud":
        return "Duże zachmurzenie";
      case "Light Cloud":
        return "Lekkie zachmurzenie";
      case "Clear":
        return "Czyste niebo";
      default:
        return weatherDescription;
    }
  };

  return (
    <div className={`card ${pinkTheme ? "pinkGradient" : ""}`}>
      <div className="cardInner">
        <div className="upperBox">
          <h2>{english ? weekdayENG : weekdayPL}</h2>
          <p>{english ? dateENG : datePL}</p>
          <p>
            <img
              width="10"
              height="15"
              src={locationIcon}
              alt="location pin icon"
            />
            <span> {location}</span>
          </p>
        </div>
        <div className="lowerBox">
          <img width="45" src={weatherIcon} alt="" />
          <h2>
            <span>{temperature}</span>°C
          </h2>
          <h5>
            {english
              ? weatherDescription
              : weatherDescriptionPL(weatherDescription)}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
