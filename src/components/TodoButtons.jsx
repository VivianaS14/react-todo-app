import React, { Component } from "react";

export class TodoButtons extends Component {
  render() {
    return (
      <>
        <div
          className={`btns-container ${
            this.props.theme ? "btns-container-light" : "btns-container-dark"
          }`}
        >
          <p>{this.props.uncompleted} items lefts</p>
          <div className="btns ">
            <button
              className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
              onClick={this.props.allTodos}
            >
              All
            </button>
            <button
              className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
              onClick={this.props.activeTodos}
            >
              Active
            </button>
            <button
              className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
              onClick={this.props.completeTodos}
            >
              Completed
            </button>
          </div>
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
            onClick={this.props.deleteCompletedTodos}
          >
            Clear Completed
          </button>
        </div>
        <div
          className={`btns-mobile ${
            this.props.theme ? "btns-mobile-light" : "btns-mobile-dark"
          }`}
        >
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
            onClick={this.props.allTodos}
          >
            All
          </button>
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
            onClick={this.props.activeTodos}
          >
            Active
          </button>
          <button
            className={`btn ${this.props.theme ? "btn-light" : "btn-dark"}`}
            onClick={this.props.completeTodos}
          >
            Completed
          </button>
        </div>
      </>
    );
  }
}

export default TodoButtons;
