import React from "react";

import "./HallOfFame.css";

function HallOfFame({ scores }) {
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
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>{score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HallOfFame;
