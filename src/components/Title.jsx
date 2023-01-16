import React, { Component } from "react";
/* Icons */
import { MdWbSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export class Title extends Component {
  render() {
    return (
      <div className="title-container">
        <h1>TODO</h1>
        <button className="btn-theme" onClick={() => this.props.toggleTheme()}>
          {this.props.theme ? (
            <BsFillMoonFill size="2rem" color="hsl(236, 33%, 92%)" />
          ) : (
            <MdWbSunny size="2.5rem" color="hsl(236, 33%, 92%)" />
          )}
        </button>
      </div>
    );
  }
}

export default Title;
