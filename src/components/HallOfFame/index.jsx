import React from "react";

import "./HallOfFame.css";

const EMPTY = "--";

function HallOfFame(props) {
  const scores = props.scores || [{ pseudo: EMPTY, date: null, score: EMPTY }];

  return (
    <div className="HallOfFame">
      <h2>Hall of fame</h2>
      <table>
        <thead>
          <tr>
            <th>pseudo</th>
            <th>date</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          {scores
            .sort((a, b) => b.score - a.score)
            .slice(0, 9)
            .map(({ pseudo, date, score }) => (
              <tr>
                <td>{pseudo}</td>
                <td>{date ? new Date(date).toLocaleDateString() : EMPTY}</td>
                <td>{score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HallOfFame;
