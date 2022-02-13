import React, { useContext, useEffect } from "react";
import SettingsPanel from "./SettingsPanel/SettingsPanel";
import TodoApp from "./TodoApp/TodoApp";
import WeatherApp from "./WeatherApp/WeatherApp";
import "./App.scss";
import { AppContext } from "../context/AppContext";

const App = () => {
  // const { pinkTheme, theme } = useContext(AppContext);
  const { theme } = useContext(AppContext);

  useEffect(() => {
    document.body.style.backgroundColor = theme.bgColor;
  }, [theme]);

  return (
    <>
      <div
        className={`container-todo`}
        style={{ backgroundColor: `${theme.bgColor}` }}
      >
        <div className={`todo-app ${theme.bgImage}`}>
          <SettingsPanel />
          <WeatherApp />
          <TodoApp />
        </div>
      </div>
    </>
  );
};

export default App;
