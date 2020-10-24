import React from "react";

import "./GameOver.css";

export default ({ totalScore, onRestart }) => (
  <div className="GameOver theme-main-background">
    <h1 className="theme-main-title ">Game over!</h1>
    <p className="score">Score: {totalScore}</p>
    <p>&nbsp;</p>
    <button className="theme-main-button" onClick={onRestart}>
      Restart
    </button>
  </div>
);
