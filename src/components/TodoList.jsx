import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { getTodos, putTodos, deleteTodos } from "../api";

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

  putTodos = async (_newTodos, _id) => {
    try {
      await putTodos(_newTodos, _id);
      this.getTodos();
    } catch (error) {
      this.setState({ todos: [], isLoading: false, error: true });
    }
  };

  deleteTodos = async (_id) => {
    try {
      await deleteTodos(_id);
      this.getTodos();
    } catch (error) {
      this.setState({ todos: [], isLoading: false, error: true });
    }
  };

  componentDidMount = () => {
    this.getTodos();
  };

  handleCompleteTodo = (_id) => {
    let newTodos = [...this.state.todos];
    let todoIndex = this.state.todos.findIndex((todo) => todo.id === _id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    this.putTodos(newTodos[todoIndex], newTodos[todoIndex].id);
  };

  handleDeleteTodo = (_id) => {
    let newTodos = [...this.state.todos];
    let todoIndex = this.state.todos.findIndex((todo) => todo.id === _id);
    this.deleteTodos(newTodos[todoIndex].id);
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
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              theme={this.props.theme}
              text={todo.content}
              completed={todo.completed}
              onComplete={() => this.handleCompleteTodo(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
