import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import "./Form.scss";

const Form = ({ submitHandler }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitHandler(location);

    setLocation("");
  };

  const { theme, language } = useContext(AppContext);

  return (
    <>
      <h2>{language.forecast}</h2>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="location"
          type="text"
          className="weather-input"
          placeholder={language.forecastInput}
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className={`weather-button`}
          style={{ background: `${theme.bgButton}` }}
        >
          {language.forecastButton}
        </button>
      </form>
    </>
  );
};

export default Form;
