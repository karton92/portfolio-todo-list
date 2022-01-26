import React from "react";
import PropTypes from "prop-types";
import "./CurrentDayDescriptionItem.css";

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
  <div className="itemBox">
    <p className="itemName">{name}</p>
    <p>
      {value} {unit}
    </p>
  </div>
);

CurrentDayDescriptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
