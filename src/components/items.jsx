import React, { Component } from "react";
import Item from "./item";

class Itmes extends Component {
  render() {
    const { todos, todosType, handleToggleTodo, handleDeleteTodo } = this.props;

    let filtered;
    if (todosType === "All") filtered = todos;
    else if (todosType === "Active")
      filtered = todos.filter(item => item.isDone === false);
    else if (todosType === "Completed")
      filtered = todos.filter(item => item.isDone === true);

    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filtered.map(todo => (
            <Item
              key={todo.id}
              data={todo}
              handleToggleTodo={handleToggleTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Itmes;
