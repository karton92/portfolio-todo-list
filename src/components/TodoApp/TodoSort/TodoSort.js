import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./TodoSort.scss";

const TodoSort = ({ setStatus }) => {
  // CONTEXT
  const { english, language } = useContext(AppContext);

  // OTHERS
  const sortText = english ? language.options.eng : language.options.pol;

  const options = english
    ? language.sortOptions.map(({ eng }) => (
        <option key={eng} value={eng}>
          {eng}
        </option>
      ))
    : language.sortOptions.map(({ eng, pol }) => (
        <option key={eng} value={eng}>
          {pol}
        </option>
      ));

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="sort">
      <label>{sortText}</label>
      <select onChange={handleStatus} id="todos" name="todos">
        {options}
      </select>
    </div>
  );
};

export default TodoSort;
