import React from "react";
import "./Forecast.scss";

import CurrentDay from "../DaysComponents/CurrentDay/CurrentDay";
import CurrentDayDescription from "../DaysComponents/CurrentDayDescription/CurrentDayDescription";
import UpcomingDaysForecast from "../DaysComponents/UpcomingDays/UpcomingDays";

const Forecast = ({ forecast }) => (
  <div className="forecastBox">
    <div className="dayBox">
      <CurrentDay {...forecast.currentDay} />
    </div>
    <div className="descriptionBox">
      <CurrentDayDescription forecast={forecast.currentDayDetails} />
      <UpcomingDaysForecast days={forecast.upcomingDays} />
    </div>
  </div>
);

export default Forecast;
