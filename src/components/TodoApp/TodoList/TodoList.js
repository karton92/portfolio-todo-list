import React, { useState, useContext } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { AppContext } from "../../Context/AppContext";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./TodoList.scss";
import ReadMoreReact from "read-more-react";

const Todo = ({ filteredTodos, completeTodo, removeTodo, editTodo }) => {
  const { english } = useContext(AppContext);
  const minLettersLength = 23;
  const idealLettersLength = 30;
  const maxLettersLength = 90;

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
      <ReadMoreReact
        key={todo.id}
        text={todo.text}
        min={minLettersLength}
        ideal={idealLettersLength}
        max={maxLettersLength}
        readMoreText={english ? "Read more..." : "Pokaż więcej..."}
      />

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
