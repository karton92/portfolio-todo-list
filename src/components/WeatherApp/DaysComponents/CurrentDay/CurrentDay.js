import React from "react";
import PropTypes from "prop-types";

import locationIcon from "./assets/location-pin.png";
import "./CurrentDay.css";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => (
  <div className="card">
    <div className="img"></div>
    <div className="gradient"></div>
    <div className="cardInner">
      <div>
        <h2>{weekday}</h2>
        <p>{date}</p>
        <p>
          <img
            width="10"
            height="15"
            src={locationIcon}
            alt="location pin icon"
          />
          <span>{location}</span>
        </p>
      </div>
      <div>
        <img width="45" src={weatherIcon} alt="" />
        <h2>
          <span>{temperature}</span>°C
        </h2>
        <h5>{weatherDescription}</h5>
      </div>
    </div>
  </div>
);

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
