import React from "react";

const Item = ({ data, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <li className={data.isDone ? "completed" : ""}>
      <div className="view">
        <input
          onChange={() => handleToggleTodo(data)}
          className="toggle"
          type="checkbox"
          checked={data.isDone}
        />
        <label>{data.text}</label>
        <button onClick={() => handleDeleteTodo(data)} className="destroy" />
      </div>
    </li>
  );
};

export default Item;
