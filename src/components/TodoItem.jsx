import React, { Component } from "react";
/* Icon */
import { BsCircle } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { FiX } from "react-icons/fi";

export class TodoItem extends Component {
  render() {
    return (
      <li
        className={`todo-item-container ${
          this.props.theme
            ? "todo-item-container-light"
            : "todo-item-container-dark"
        }`}
      >
        <div className="todo-item-text">
          {this.props.completed ? (
            <BiCheck
              size="1.8rem"
              className="item-completed"
              onClick={() => this.props.onComplete()}
            />
          ) : (
            <BsCircle
              size="1.8rem"
              color={
                this.props.theme ? "hsl(236, 33%, 92%)" : "hsl(237, 14%, 26%)"
              }
              className="item-check"
              onClick={() => this.props.onComplete()}
            />
          )}

          <p className={this.props.completed ? "item-completed-p" : ""}>
            {this.props.text}
          </p>
        </div>
        {this.props.completed && (
          <FiX
            size="1.8rem"
            className="item-delete"
            onClick={() => this.props.onDelete()}
          />
        )}
      </li>
    );
  }
}

export default TodoItem;
