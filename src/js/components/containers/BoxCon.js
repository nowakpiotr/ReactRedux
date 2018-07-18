import React, { Component } from "react";
import { connect } from "react-redux";
import BoxWithColor from "../presenters/BoxWithColor";
import { loadColor } from "../../actions/colorBox";

const mapStateToProps = state => {
  return { color: state.color };
};
const mapDispatchToProps = dispatch => {
  return {
    loadColor: () => dispatch(loadColor())
  };
};
class ConnectedBox extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <BoxWithColor
        handleClick={this.props.loadColor}
        color={this.props.color}
      />
    );
  }
}

const BoxCon = connect(mapStateToProps, mapDispatchToProps)(ConnectedBox);

export default BoxCon;
