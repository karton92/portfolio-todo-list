import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoApp/TodoList/TodoList";

// CONTEXT
import AppProvider from "./components/Context/AppContext";

ReactDOM.render(
  <AppProvider>
    <TodoList />
  </AppProvider>,
  document.getElementById("root")
);
