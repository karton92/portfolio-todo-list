import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../../Context/AppContext";

import "./UpcomingDaysItem.css";

const imgUrlBase = "https://www.metaweather.com/static/";

const UpcomingDaysItem = ({ weekdayPL, weekdayENG, temperature, imgUrl }) => {
  const { english } = useContext(AppContext);

  return (
    <li className="weekday">
      <img width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
      <span>{english ? weekdayENG : weekdayPL}</span>
      <span>{temperature}&deg;C</span>
    </li>
  );
};

UpcomingDaysItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysItem;
