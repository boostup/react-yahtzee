import React from "react";

import "./HallOfFame.css";

function Scoreboard({ scores }) {
  return (
    <div className="Scoreboard">
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
          {scores.map(({ pseudo, date, score }) => (
            <tr>
              <td>{pseudo}</td>
              <td>{date}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
