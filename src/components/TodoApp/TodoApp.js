import React, { useState, useContext } from "react";

// COMPONENTS
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoOrder from "./TodoOrder/TodoOrder";

// CONTEXT
import { AppContext } from "../../context/AppContext";

// SCSS
import "./TodoApp.scss";

const emptyStringRegex = /^\s*$/;

const filterTodos = (status, todos) => {
  switch (status) {
    case "complete":
      return todos.filter((todo) => todo.isDone);
    case "uncomplete":
      return todos.filter((todo) => !todo.isDone);
    default:
      return todos;
  }
};

const sortTodos = (status, todos) => {
  switch (status) {
    case "latest":
      return [...todos].sort(function (a, b) {
        return b.data - a.data;
      });
    case "oldest":
      return [...todos].sort(function (a, b) {
        return a.data - b.data;
      });
    case "complete":
      return [...todos].sort((a, b) => (b.isDone ? 1 : -1));
    default:
      return todos;
  }
};

const TodoApp = () => {
  // HOOKS
  const [todos, setTodos] = useState([]);
  const [sortState, setSortState] = useState("latest");
  const [filterState, setFilterState] = useState("all");

  const { theme, language } = useContext(AppContext);

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
    setTodos([todo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
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

  const handleSortChange = (e) => {
    setSortState(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterState(e.target.value);
  };

  const displayedTodos = sortTodos(sortState, filterTodos(filterState, todos));

  return (
    <>
      <div className="form-panel">
        <TodoForm onSubmit={addTodo} />
        <div className="sort-panel">
          <TodoOrder
            sortText={"Sort"}
            value={sortState}
            onChange={handleSortChange}
            options={language.sortOptions}
          />

          <TodoOrder
            sortText={"Filter"}
            value={filterState}
            onChange={handleFilterChange}
            options={language.filterOptions}
          />
        </div>
      </div>

      <div
        className={`todo-container ${theme === "pink" ? "pink-scrollbar" : ""}`}
      >
        <TodoList
          filteredTodos={displayedTodos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
