import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

import "./UpcomingDaysItem.scss";

const imgUrlBase = "https://www.metaweather.com/static/";

const UpcomingDaysItem = ({ weekdayPL, weekdayENG, temperature, imgUrl }) => {
  const { currentLanguage } = useContext(AppContext);

  return (
    <li className="weekday">
      <img src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
      <span>{currentLanguage === "en" ? weekdayENG : weekdayPL}</span>
      <span>{temperature}&deg;C</span>
    </li>
  );
};

export default UpcomingDaysItem;
