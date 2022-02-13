import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import "./CurrentDayDescriptionItem.scss";

const CurrentDayDescriptionItem = ({ name, value, unit }) => {
  const { currentLanguage } = useContext(AppContext);

  return (
    <div className="itemBox">
      <p className="itemName">
        {currentLanguage === "en" ? name.english : name.polish}
      </p>
      <p>
        {value} {unit}
      </p>
    </div>
  );
};

export default CurrentDayDescriptionItem;
