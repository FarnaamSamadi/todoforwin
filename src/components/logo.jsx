import React from "react";

const Logo = ({ value, onChange, onSubmit }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Logo;
