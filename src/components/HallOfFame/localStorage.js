import React from "react";

const LOCAL_STORAGE_KEY = "yahtzee!::scores";

export function getScores() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

export function setScores(scores) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(scores));
}

export function saveScore(score = 0) {
  const scores = getScores() || [];
  scores.push({
    pseudo: "---",
    date: new Date(),
    score,
  });
  setScores(scores);
}
