import React, { Component } from "react";

export class TodoButtons extends Component {
  render() {
    return (
      <div
        className={`btns-container ${
          this.props.theme ? "btns-container-light" : "btns-container-dark"
        }`}
      >
        <p>{this.props.uncompleted} items lefts</p>
        <div className="btns">
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
          >
            All
          </button>
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
          >
            Active
          </button>
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
          >
            Completed
          </button>
        </div>
        <button
          className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
        >
          Clear Completed
        </button>
      </div>
    );
  }
}

export default TodoButtons;
