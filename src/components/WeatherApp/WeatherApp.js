import React from "react";
import "./WeatherApp.css";
import Form from "./Form/Form";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import Forecast from "./Forecast/Forecast";
import useForecast from "./hooks/useForecast";

const WeatherApp = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const handleSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <>
      {!forecast && (
        <div className="box">
          {!isLoading && <Form submitHandler={handleSubmit} />}
          {isError && <Error message={isError} />}
          {isLoading && <Loader />}
        </div>
      )}
      {/* Forecast */}
      {forecast && <Forecast forecast={forecast} />}
    </>
  );
};

export default WeatherApp;
