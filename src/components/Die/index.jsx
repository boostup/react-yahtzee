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
    const { numberWords, locked, val, rolling } = this.props;
    let classNames = `Die fas fa-dice-${numberWords[val - 1]}`;
    if (locked) classNames += " Die-locked";
    if (rolling) classNames += " Die-rolling";
    return <button className={classNames} onClick={this.handleClick}></button>;
  }
}

export default Die;
