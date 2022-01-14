import React from "react";
import "./WeatherApp.css";
import Form from "./Form/Form";
import Loader from "./Loader/Loader";
import Header from "./Header/Header";

const WeatherApp = () => {
  return (
    <div className="box">
      <Header />
      <Form />
    </div>
  );
};

export default WeatherApp;
