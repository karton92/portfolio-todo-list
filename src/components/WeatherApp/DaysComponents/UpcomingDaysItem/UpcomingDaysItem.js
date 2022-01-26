import React from "react";
import PropTypes from "prop-types";

import "./UpcomingDaysItem.css";

const imgUrlBase = "https://www.metaweather.com/static/";

const UpcomingDaysItem = ({ weekday, temperature, imgUrl }) => (
  <li className="weekday">
    <img width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
    <span>{weekday}</span>
    <span>{temperature}&deg;</span>
  </li>
);

UpcomingDaysItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysItem;
