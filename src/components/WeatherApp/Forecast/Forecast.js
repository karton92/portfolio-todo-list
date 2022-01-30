import React from "react";
import PropTypes from "prop-types";
import "./Forecast.css";

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

// Forecast.propTypes = {
//   forecast: PropTypes.shape({
//     currentDay: PropTypes.object,
//     currentDayDetails: PropTypes.array,
//     upcomingDays: PropTypes.array,
//   }),
// };

export default Forecast;
