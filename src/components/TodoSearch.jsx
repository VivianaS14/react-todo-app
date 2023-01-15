import React, { Component } from "react";
/* Icon */
import { BsCircle } from "react-icons/bs";

export class TodoSearch extends Component {
  render() {
    return (
      <div className="search-container">
        <BsCircle size="3rem" />
        <input type="search" placeholder="Create a new todo..." />
      </div>
    );
  }
}

export default TodoSearch;
