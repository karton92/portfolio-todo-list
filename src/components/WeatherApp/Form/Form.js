import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Form.css";

const Form = ({ submitHandler }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitHandler(location);

    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="location"
        type="text"
        className="weather-input"
        placeholder="Search for location"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={handleSubmit} type="submit" className="weather-button">
        SEARCH
      </button>
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
