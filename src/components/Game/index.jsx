import React, { Component } from "react";

import { NUM_DICE, NUM_ROLLS, INITIAL_STATE } from "./game.constants";
import {
  getRandDice,
  getTotalScore,
  displayRollInfo,
  isGameOver,
} from "./game.utils";

import Dice from "../Dice";
import ScoreTable from "../ScoreTable";
import Modal from "../Modal";
import GameOver from "../GameOver";

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
    if (this.isGameOver()) {
      this.scoreRule({
        rulename,
        ruleFn,
        rollsLeft: 0,
        locked: Array(NUM_DICE).fill(true),
      });
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

  scoreRule = ({ rulename, ruleFn, rollsLeft, locked }) => {
    this.setState((st) => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft,
      locked,
    }));
  };

  isGameOver = () => {
    const isOver = isGameOver(this.state.scores);
    if (isOver) {
      setTimeout(() => this.setState({ isGameOver: true }), 2000);
    }
  };

  restart = () => {
    this.setState(INITIAL_STATE, () => this.animateRoll());
  };

  render() {
    const { dice, locked, rolling, rollsLeft, scores, isGameOver } = this.state;
    return (
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
    );
  }
}

export default Game;
