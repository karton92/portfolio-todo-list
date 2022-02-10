import React, { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

import "./Form.scss";

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
    <>
      {english ? (
        <h1>
          Weather <strong>Forecast</strong>
        </h1>
      ) : (
        <h1>
          Prognoza <strong>Pogody</strong>
        </h1>
      )}
      <form onSubmit={handleSubmit}>
        <input
          aria-label="location"
          type="text"
          className="weather-input"
          placeholder={english ? "Search for capital city" : "Szukaj stolicy"}
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
    </>
  );
};

export default Form;
