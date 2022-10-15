import React from "react";

let HighScoreTable = (props) => {
  return (
    <div className="table-container">
      <h3>{props.data.name}</h3>
      <table className="table">
        <tbody>
          {props.data.scores.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.n}</td>
                <td>{e.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;