import React, { useEffect, useState, useContext } from "react";

// COMPONENTS
import TodoForm from "./TodoForm/TodoForm";
import Settings from "./TodoSettings/Settings";
import TodoList from "./TodoList/TodoList";
import TodoSort from "./TodoSort/TodoSort";
import WeatherApp from "../WeatherApp/WeatherApp";

// CONTEXT
import { AppContext } from "../Context/AppContext";

// SCSS
import "./TodoApp.scss";

const emptyStringRegex = /^\s*$/;

const TodoApp = () => {
  // HOOKS
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { pinkTheme, theme, english, language } = useContext(AppContext);

  // USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  useEffect(() => {
    pinkTheme
      ? (document.body.style.backgroundColor = "rgb(209, 103, 160)")
      : (document.body.style.backgroundColor = "rgb(47, 127, 192)");
  }, [pinkTheme]);

  // FUNCTIONS
  const addTodo = (todo) => {
    if (!todo.text || emptyStringRegex.test(todo.text)) {
      return console.log("Nie możesz dodać takiego tekstu");
    } else if (todos.length > 10) {
      return alert(`
        Hola hola!
        Czy przypadkiem nie za dużo tych zadań na raz? :)
        Najpierw skończ poprzednie zadania i zrób miejsce dla nowych!`);
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const newTodoArr = [...todos].filter((todo) => todo.id !== id);
    //REMOVED FOCUS TODO
    let removedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDelete = true;
      }
      return todo;
    });
    setTodos(removedTodo);
    //RERENDER NEW ARR WITH TODOS WITHOUT FOCUSED AFTER DELETE ANIMATION END
    setTimeout(() => setTodos(newTodoArr), 300);
  };

  // /^\s*$/ is regex (regular expression) for empty string or string with only spaces & test is method for regular expression
  const editTodo = (todoId, newValue) => {
    if (!newValue.text || emptyStringRegex.test(newValue.text)) {
      return console.log("Wpisz poprawnie tekst");
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const filterHandler = () => {
    switch (status) {
      case "complete":
        const completed = todos.filter((todo) => todo.isDone);
        setFilteredTodos(completed);
        break;
      case "uncomplete":
        const uncompleted = todos.filter((todo) => !todo.isDone);
        setFilteredTodos(uncompleted);
        break;
      case "latest":
        const latest = [...todos].sort(function (a, b) {
          return b.data - a.data;
        });
        setFilteredTodos(latest);
        break;
      case "oldest":
        const oldest = [...todos].sort(function (a, b) {
          return a.data - b.data;
        });
        setFilteredTodos(oldest);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // OTHERS
  const titleText = english ? language.title.eng : language.title.pol;
  const bgStyle = pinkTheme ? { background: theme.bgColor } : null;
  const imgStyle = pinkTheme ? { backgroundImage: theme.bgImg } : null;

  return (
    <>
      <div className="container-todo" style={bgStyle}>
        <div className="todo-app" style={imgStyle}>
          <div className="settings-panel">
            <Settings />
            <h1>{titleText}</h1>
          </div>
          <WeatherApp />
          <div className="form-panel">
            <TodoForm onSubmit={addTodo} />
            <TodoSort todos={todos} setStatus={setStatus} />
          </div>
          <div
            className={`todo-container ${pinkTheme ? "pink-scrollbar" : ""}`}
          >
            <TodoList
              filteredTodos={filteredTodos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
