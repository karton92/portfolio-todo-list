import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../Context/AppContext";

import "./Form.css";

const Form = ({ submitHandler }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitHandler(location);

    setLocation("");
  };

  const { pinkTheme, english } = useContext(AppContext);

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="location"
        type="text"
        className="weather-input"
        placeholder={english ? "Search for location" : "Szukaj lokalizacji"}
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        type="submit"
        className={`weather-button ${pinkTheme ? "pink" : null}`}
      >
        {english ? "SEARCH" : "SZUKAJ"}
      </button>
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
