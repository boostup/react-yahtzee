import { getRandDice } from "./game.utils";

export const DISPLAY_RESTART_MODAL_MS = 500;
export const NUM_DICE = 5;
export const NUM_ROLLS = 3;
export const INITIAL_STATE = {
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
