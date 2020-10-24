import React from "react";

import "./GamePlayRules.css";

function GamePlayRules() {
  return (
    <div className="GamePlayRules">
      <h2>Object of the game</h2>
      <p>
        <ul>
          <li>
            The object of Yahtzee is to obtain the highest score from throwing 5
            dice.
          </li>
          <li>
            The game consists of 13 rounds. In each round, you can roll the dice
            up to 3 times, and then score the roll in one of 13 categories.
          </li>
          <li>
            You must score once in each category. The score is determined by a
            different rule for each category.
          </li>
          <li> The game ends once all 13 categories have been scored.</li>
        </ul>
      </p>
    </div>
  );
}

export default GamePlayRules;
