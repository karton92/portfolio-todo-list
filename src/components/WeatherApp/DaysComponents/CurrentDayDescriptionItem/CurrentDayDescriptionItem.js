import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import "./CurrentDayDescriptionItem.scss";

const CurrentDayDescriptionItem = ({ name, value, unit, id }) => {
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

export default CurrentDayDescriptionItem;
