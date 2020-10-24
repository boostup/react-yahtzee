import React, { Component } from "react";

import {
  NUM_DICE,
  NUM_ROLLS,
  INITIAL_STATE,
  DISPLAY_RESTART_MODAL_MS,
} from "./game.constants";
import {
  getRandDice,
  getTotalScore,
  displayRollInfo,
  shouldGameEnd,
} from "./game.utils";

import { saveScore } from "../HallOfFame/localStorage";

import Dice from "../Dice";
import ScoreTable from "../ScoreTable";
import Modal from "../Modal";
import GameOver from "../GameOver";
import PauseMenu from "../PauseMenu";

import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount = () => {
    this.animateRoll();
  };

  animateRoll = () => {
    this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
  };

  roll = (evt) => {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) => (st.locked[i] ? d : getRandDice())),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false,
    }));
  };

  toggleLocked = (idx) => {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.rolling) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  };

  doScore = (rulename, ruleFn) => {
    if (this.isGameAboutToEnd()) {
      this.gameOver(rulename, ruleFn);
      return;
    }
    // evaluate this ruleFn with the dice and score this rulename
    this.scoreRule({
      rulename,
      ruleFn,
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    });
    this.animateRoll();
  };

  scoreRule = ({
    rulename,
    ruleFn,
    rollsLeft,
    locked,
    callbackFn = () => {},
  }) => {
    this.setState(
      (st) => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        rollsLeft,
        locked,
      }),
      callbackFn
    );
  };

  isGameAboutToEnd = () => {
    const isOver = shouldGameEnd(this.state.scores);
    if (isOver)
      setTimeout(
        () => this.setState({ isGameOver: true }),
        DISPLAY_RESTART_MODAL_MS
      );
    return isOver;
  };

  gameOver = (rulename, ruleFn) => {
    this.scoreRule({
      rulename,
      ruleFn,
      rollsLeft: 0,
      locked: Array(NUM_DICE).fill(true),
      callbackFn: () => {
        const totalScore = getTotalScore(this.state.scores);
        console.log(totalScore);
        saveScore(totalScore);
      },
    });
  };

  restart = () => {
    this.setState(INITIAL_STATE, () => this.animateRoll());
  };

  render() {
    const { dice, locked, rolling, rollsLeft, scores, isGameOver } = this.state;
    return (
      <>
        <PauseMenu onRestart={this.restart} />
        <div className="Game">
          <header className="theme-main-background">
            <h1 className="theme-main-title">Yahtzee!</h1>

            <section className="Game-dice-section">
              <Dice
                dice={dice}
                locked={locked}
                handleClick={this.toggleLocked}
                rolling={rolling}
              />
              <div className="Game-button-wrapper">
                <button
                  className="theme-main-button Game-reroll"
                  disabled={locked.every((x) => x) || rolling}
                  onClick={this.animateRoll}
                >
                  {displayRollInfo(rollsLeft)}
                </button>
              </div>
            </section>
          </header>
          <ScoreTable
            doScore={this.doScore}
            scores={scores}
            totalScore={getTotalScore(scores)}
          />

          {isGameOver ? (
            <Modal>
              <GameOver
                totalScore={getTotalScore(scores)}
                onRestart={this.restart}
              />
            </Modal>
          ) : null}
        </div>
      </>
    );
  }
}

export default Game;
