import React from "react";
import "./Error.scss";

const Error = ({ message }) => {
  return (
    <div className="error" role="alert">
      {message}
    </div>
  );
};

export default Error;
