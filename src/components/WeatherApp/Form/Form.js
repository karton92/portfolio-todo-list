import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <form>
      <input
        aria-label="location"
        type="text"
        className="weather-input"
        placeholder="Search for location"
        required
        value=""
      />

      <button type="submit" className="weather-button">
        SEARCH
      </button>
    </form>
  );
};

export default Form;
