import React from "react";
import UpcomingDaysItem from "../UpcomingDaysItem/UpcomingDaysItem";

import "./UpcomingDays.scss";

const UpcomingDays = ({ days }) => (
  <ul className="weekList">
    {days.map((day) => (
      <UpcomingDaysItem {...day} key={day.id} />
    ))}
  </ul>
);

export default UpcomingDays;
