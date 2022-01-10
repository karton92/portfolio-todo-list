import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/TodoList";

// CONTEXT
import AppProvider from "./components/Context/AppContext";

ReactDOM.render(
  <AppProvider>
    <TodoList />
  </AppProvider>,
  document.getElementById("root")
);
