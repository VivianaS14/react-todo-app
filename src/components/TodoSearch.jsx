import React, { Component } from "react";
/* Icon */
import { BsCircle } from "react-icons/bs";

export class TodoSearch extends Component {
  render() {
    return (
      <div
        className={`search-container ${
          this.props.theme ? "search-container-dark" : "search-container-light"
        }`}
      >
        <BsCircle size="1.8rem" />
        <input
          className="search-input"
          type="search"
          placeholder="Create a new todo..."
        />
      </div>
    );
  }
}

export default TodoSearch;
