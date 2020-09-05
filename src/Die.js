import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  };

  handleClick = (evt) => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    let classNames = `Die fas fa-dice-${
      this.props.numberWords[this.props.val - 1]
    }`;
    if (this.props.locked) classNames += " Die-locked";
    return <button className={classNames} onClick={this.handleClick}></button>;
  }
}

export default Die;
