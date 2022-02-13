import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
// import { BrowserView } from "react-device-detect";
import { FaPlus } from "react-icons/fa";
import "./TodoForm.scss";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  const testMoblileDetect = false;

  const { theme, language } = useContext(AppContext);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) === false
    ) {
    }
  }, [input]);

  const handleInput = (e) => {
    if (e.target.value) setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    //Zczytuje dane z inputa z form i przekazuje już obiekt jako argument do addTodo w TodoList, który dodawany jest do tablicy z todos
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      delete: props.delete,
      data: new Date().getTime(),
    });
    setInput("");
  };

  return (
    <form onSubmit={handleAddTodo} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder={language.updateInputText}
            maxLength="90"
            value={input}
            onChange={handleInput}
            name="text"
            className="todo-input"
            ref={testMoblileDetect ? inputRef : null}
          />
          <button
            className={`todo-button update`}
            style={{ background: `${theme.bgButton}` }}
          >
            {language.updateButtonText}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder={language.addInputText}
            maxLength="90"
            value={input}
            onChange={handleInput}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button
            className="todo-button"
            style={{ background: `${theme.bgButton}` }}
          >
            <FaPlus />
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
