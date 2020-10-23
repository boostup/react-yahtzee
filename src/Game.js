import React, { Component } from "react";

import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import Modal from "./Modal";
import GameOver from "./GameOver";

import "./theme.css";
import "./Game.css";

const getRandDice = () => {
  return Math.ceil(Math.random() * 6);
};

const NUM_DICE = 5;
const NUM_ROLLS = 3;
const INITIAL_STATE = {
  isGameOver: false,
  dice: Array.from({ length: NUM_DICE }).map((d) => getRandDice()),
  locked: Array(NUM_DICE).fill(false),
  rollsLeft: NUM_ROLLS,
  scores: {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined,
  },
};

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
    const { scores } = this.state;
    let unfulfilledRules = 0;
    for (let key in scores) {
      if (scores[key] === undefined) unfulfilledRules++;
    }
    const isOver = unfulfilledRules === 1;
    if (isOver) this.setState({ isGameOver: true });
    return isOver;
  };

  restart = () => {
    this.setState(INITIAL_STATE, () => this.animateRoll());
  };

  displayRollInfo = () => {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round",
    ];
    return messages[this.state.rollsLeft];
  };

  getTotalScore = () => {
    const { scores } = this.state;
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key];
    }
    return totalScore;
  };

  render() {
    const { dice, locked, rolling } = this.state;
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
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable
          doScore={this.doScore}
          scores={this.state.scores}
          totalScore={this.getTotalScore()}
        />

        {this.state.isGameOver ? (
          <Modal>
            <GameOver
              totalScore={this.getTotalScore()}
              onRestart={this.restart}
            />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Game;
