export function getRandDice() {
  return Math.ceil(Math.random() * 6);
}

export function getTotalScore(scores) {
  let totalScore = 0;
  for (let key in scores) {
    if (scores[key]) totalScore += scores[key];
  }
  return totalScore;
}

export function displayRollInfo(rollsLeft) {
  const messages = [
    "0 Rolls Left",
    "1 Roll Left",
    "2 Rolls Left",
    "Starting Round",
  ];
  return messages[rollsLeft];
}

export function shouldGameEnd(scores) {
  let unfulfilledRules = 0;
  for (let key in scores) {
    if (scores[key] === undefined) unfulfilledRules++;
  }
  return unfulfilledRules === 1;
}
