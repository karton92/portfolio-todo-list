import React from "react";
import PropTypes from "prop-types";

import UpcomingDaysItem from "../UpcomingDaysItem/UpcomingDaysItem";

import "./UpcomingDays.css";

const UpcomingDays = ({ days }) => (
  <ul className="weekList">
    {days.map((day) => (
      <UpcomingDaysItem {...day} key={day.weekday} />
    ))}
  </ul>
);

UpcomingDays.propTypes = {
  days: PropTypes.array.isRequired,
};

export default UpcomingDays;
