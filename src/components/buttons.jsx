import React from "react";
import TodoType from "./todoType";

const Buttons = ({
  itemsLeft,
  onClearComplete,
  todosType,
  onTodoTypeChange
}) => {
  const todoTypes = ["All", "Active", "Completed"];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item left
      </span>
      <ul className="filters">
        {todoTypes.map(item => (
          <TodoType
            key={item}
            name={item}
            selectedTodoType={todosType}
            onTodoTypeChange={onTodoTypeChange}
          />
        ))}
      </ul>
      <button onClick={onClearComplete} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Buttons;
