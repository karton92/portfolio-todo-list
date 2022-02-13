import React from "react";
import "./CurrentDayDescription.scss";
import CurrentDayDescriptionItem from "../CurrentDayDescriptionItem/CurrentDayDescriptionItem";

const CurrentDayDescription = ({ forecast }) => (
  <div className="dayDetails">
    <div className="infoItem">
      {forecast.map((item) => (
        <CurrentDayDescriptionItem {...item} key={item.name.english} />
      ))}
    </div>
  </div>
);

export default CurrentDayDescription;
