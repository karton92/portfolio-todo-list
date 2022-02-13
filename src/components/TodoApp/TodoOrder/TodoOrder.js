import React from "react";
import "./TodoOrder.scss";

const TodoOrder = ({ sortText, onChange, value, options }) => {
  return (
    <div className="sort">
      <label>{sortText}</label>
      <select onChange={onChange} value={value} name="todos">
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TodoOrder;
