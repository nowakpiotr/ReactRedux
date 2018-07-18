import React, { Component } from "react";

class BoxWithColor extends Component {
  render() {
    return (
      <div className="wrapper">
        <div
          style={{
            backgroundColor: `${this.props.color.color}`
          }}
          className="box"
        >
          <button
            onClick={() => {
              this.props.handleClick();
            }}
          >
            Change Color
          </button>
        </div>
      </div>
    );
  }
}

export default BoxWithColor;
