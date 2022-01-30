import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import PropTypes from "prop-types";
import "./CurrentDayDescriptionItem.css";

const CurrentDayDescriptionItem = ({ name, value, unit }) => {
  const { english } = useContext(AppContext);

  return (
    <div className="itemBox">
      <p className="itemName">{english ? name.english : name.polish}</p>
      <p>
        {value} {unit}
      </p>
    </div>
  );
};

CurrentDayDescriptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
