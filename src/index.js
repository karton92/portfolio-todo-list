import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp/TodoApp";

// CONTEXT
import AppProvider from "./components/Context/AppContext";

ReactDOM.render(
  <AppProvider>
    <TodoApp />
  </AppProvider>,
  document.getElementById("root")
);
