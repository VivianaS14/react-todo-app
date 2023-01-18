import React, { Component } from "react";
/* Icon */
import { BsCircle } from "react-icons/bs";
/* Api */
import { addTodos } from "../api";

export class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }

  addTodos = async (_newTodo) => {
    try {
      await addTodos(_newTodo);
    } catch (error) {
      this.setState({ todos: [], isLoading: false, error: true });
    }
  };

  handleAddTodo = (e, _newTodo) => {
    if (e.key === "Enter") {
      this.addTodos(this.state.newTodo);
      this.setState({ newTodo: "" });
      //window.location.reload(true);
      setTimeout(() => window.location.reload(true), 300);
    }
  };

  render() {
    return (
      <div
        className={`add-container ${
          this.props.theme ? "add-container-light" : "add-container-dark"
        }`}
      >
        <BsCircle
          size="1.8rem"
          color={this.props.theme ? "hsl(236, 33%, 92%)" : "hsl(237, 14%, 26%)"}
        />
        <input
          className={this.props.theme ? "add-input" : "add-input-dark"}
          type="search"
          placeholder="Create a new todo..."
          value={this.state.newTodo}
          onChange={(e) => this.setState({ newTodo: e.target.value })}
          onKeyDown={(e) => this.handleAddTodo(e, this.state.newTodo)}
        />
      </div>
    );
  }
}

export default TodoAdd;
