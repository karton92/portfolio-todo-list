import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

import "./UpcomingDaysItem.css";

const imgUrlBase = "https://www.metaweather.com/static/";

const UpcomingDaysItem = ({ weekdayPL, weekdayENG, temperature, imgUrl }) => {
  const { english } = useContext(AppContext);

  return (
    <li className="weekday">
      <img src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
      <span>{english ? weekdayENG : weekdayPL}</span>
      <span>{temperature}&deg;C</span>
    </li>
  );
};

export default UpcomingDaysItem;
