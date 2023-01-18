import React, { Component } from "react";
/* Icon */
import { BsCircle } from "react-icons/bs";

export class TodoAdd extends Component {
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
          value={this.props.value}
          onChange={(e) => this.props.handleChange(e.target.value)}
          onKeyDown={(e) => this.props.handleAddTodo(e)}
        />
      </div>
    );
  }
}

export default TodoAdd;
