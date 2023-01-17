import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { getTodos } from "../api";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isLoading: true,
      error: false,
    };
  }

  getTodos = async () => {
    try {
      const res = await getTodos();
      this.setState({ todos: res.data, isLoading: false });
    } catch (error) {
      this.setState({ todos: [], isLoading: false, error: true });
    }
  };

  componentDidMount = () => {
    this.getTodos();
  };

  render() {
    return (
      <section
        className={`todos-container ${
          this.props.theme ? "todos-container-light" : "todos-container-dark"
        }`}
      >
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.error && <p>Ups hay un error!...</p>}

        <ul>
          {this.state.todos.map((todo, i) => (
            <TodoItem
              key={i}
              theme={this.props.theme}
              text={todo.content}
              completed={todo.completed}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
