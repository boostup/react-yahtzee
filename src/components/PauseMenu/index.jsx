import React, { useState } from "react";
import { motion } from "framer-motion";

import { getScores } from "../HallOfFame/localStorage";

import GameDemo from "../GameDemo";
import GamePlayRules from "../GamePlayRules";
import HallOfFame from "../HallOfFame";
import PauseButton from "../PauseButton";

import "./PauseMenu.css";

const RESTART_DELAY = 300;

const pauseMenuAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

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
    <motion.div
      className="PauseMenu-wrapper"
      initial={false}
      animate={showMenu ? "open" : "closed"}
    >
      <motion.div
        className="PauseMenu-inner-wrapper"
        variants={pauseMenuAnimation}
      >
        <HallOfFame scores={scores} />
        <button
          className="theme-main-button restart-btn"
          onClick={onRestartBtnClicked}
        >
          <div className="reload-icon">&#x21bb;</div>
          <span className="text">Start a new game</span>
        </button>
        <GamePlayRules />
        <GameDemo />
      </motion.div>

      <motion.div className="pause-btn-wrapper">
        <PauseButton toggle={onPauseBtnClicked} />
      </motion.div>
    </motion.div>
  );
}

export default PauseMenu;
