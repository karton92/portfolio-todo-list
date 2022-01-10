import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./Todo.css";

const Todo = ({ filteredTodos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return filteredTodos.map((todo, index) => (
    <div
      className={`todo-row
        ${todo.isDone ? "complete" : ""}
        ${todo.isDelete ? "fall" : ""}`}
      key={index}
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <RiCheckboxCircleLine
          onClick={() => completeTodo(todo.id)}
          className="complete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
