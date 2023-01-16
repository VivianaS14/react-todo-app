import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <section
        className={`todos-container ${
          this.props.theme ? "todos-container-light" : "todos-container-dark"
        }`}
      >
        <ul>{this.props.children}</ul>
      </section>
    );
  }
}

export default TodoList;
