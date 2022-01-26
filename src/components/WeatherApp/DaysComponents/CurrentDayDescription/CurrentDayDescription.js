import React from "react";
import PropTypes from "prop-types";
import "./CurrentDayDescription.css";
import CurrentDayDescriptionItem from "../CurrentDayDescriptionItem/CurrentDayDescriptionItem";

const CurrentDayDescription = ({ forecast }) => (
  <div className="dayDetails">
    <div className="infoItem">
      {forecast.map((item) => (
        <CurrentDayDescriptionItem {...item} key={item.name} />
      ))}
    </div>
  </div>
);

CurrentDayDescription.propTypes = {
  forecast: PropTypes.array,
};

export default CurrentDayDescription;
