import React, { Component } from "react";
import Logo from "./components/logo";
import Buttons from "./components/buttons";
import Items from "./components/items";
import "./App.css";

class App extends Component {
  state = {
    todo: {
      id: 0,
      text: "",
      isDone: false
    },

    todos: [],

    todoCounter: 0,

    todosType: "All"
  };

  handleChange = e => {
    e.preventDefault();
    const todo = { ...this.state.todo };
    todo.text = e.currentTarget.value;
    this.setState({ todo });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { todo, todos } = this.state;
    let todoCounter = this.state.todoCounter;
    todoCounter++;

    todo.id = todoCounter;
    todos.push(todo);

    this.setState({
      todoCounter,
      todos,
      todo: { id: 0, text: "", isDone: false }
    });
  };

  handleToggleTodo = todo => {
    let todos = [...this.state.todos];
    const idx = todos.indexOf(todo);
    todos[idx].isDone = !todos[idx].isDone;

    this.setState({ todos });
  };

  handleDeleteTodo = todo => {
    let todos = [...this.state.todos];
    let ans = todos.filter(item => item !== todo);
    this.setState({ todos: ans });
  };

  handleItemLeft = () => {
    let todos = [...this.state.todos];
    return todos.filter(todo => todo.isDone === false).length;
  };

  handleClearComplete = () => {
    let todos = [...this.state.todos];
    let ans = todos.filter(item => item.isDone !== true);

    this.setState({ todos: ans });
  };

  handleTodoTypeChange = name => {
    this.setState({ todosType: name });
  };

  render() {
    return (
      <div className="todoapp">
        <Logo
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.todo.text}
        />
        <Items
          todos={this.state.todos}
          handleToggleTodo={this.handleToggleTodo}
          handleDeleteTodo={this.handleDeleteTodo}
          todosType={this.state.todosType}
        />
        <Buttons
          itemsLeft={this.handleItemLeft()}
          onClearComplete={this.handleClearComplete}
          todosType={this.state.todosType}
          onTodoTypeChange={this.handleTodoTypeChange}
        />
      </div>
    );
  }
}

export default App;
