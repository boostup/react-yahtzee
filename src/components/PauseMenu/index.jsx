import React, { useState } from "react";

import { getScores } from "../HallOfFame/localStorage";

import GameDemo from "../GameDemo";
import GamePlayRules from "../GamePlayRules";
import HallOfFame from "../HallOfFame";

import "./PauseMenu.css";

const RESTART_DELAY = 300;

function PauseMenu({ onRestart }) {
  const scores = getScores();

  const [showMenu, setShowMenu] = useState(false);

  const onPauseBtnClicked = () => {
    setShowMenu((state) => !state);
  };

  const onRestartBtnClicked = () => {
    setShowMenu(false);
    setTimeout(() => onRestart(), RESTART_DELAY);
  };

  return (
    <div className={`PauseMenu-wrapper ${showMenu ? "open" : ""}`}>
      <div className="pause-btn-wrapper">
        <button onClick={onPauseBtnClicked}>
          <span className="pause-btn">&#9208;</span>
        </button>
      </div>

      {showMenu ? (
        <div className="PauseMenu-inner-wrapper">
          <button
            className="theme-main-button restart-btn"
            onClick={onRestartBtnClicked}
          >
            <div className="reload-icon">&#x21bb;</div>
            <span className="text">Start a new game</span>
          </button>
          <HallOfFame scores={scores} />
          <GamePlayRules />
          <GameDemo />
        </div>
      ) : null}
    </div>
  );
}

export default PauseMenu;
