import React from "react";

const TodoType = ({ name, selectedTodoType, onTodoTypeChange }) => {
  return (
    <li>
      <a
        onClick={() => onTodoTypeChange(name)}
        className={selectedTodoType === name ? "selected" : ""}
      >
        {name}
      </a>
    </li>
  );
};

export default TodoType;
