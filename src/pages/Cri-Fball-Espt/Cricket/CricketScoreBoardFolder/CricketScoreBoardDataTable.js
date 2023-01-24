import React, { Component } from "react";
// import { table, tbody, td, th, thead, tr } from "react-super-responsive-table";
import "./CricketScoreBoard.css";


class CricketScoreBoardDataTable extends Component {
  render() {
    // console.log(this.props.myData)
    // define the findPlayer function as before
    const Pnrs = Object.entries(this.props.obj)
      .filter(([key, value]) => key.startsWith("pl"))
      .map(([key, value]) => value);
    function findPlayer(value) {
      const array = Pnrs;
      const object = array.find((obj) => obj.Pid === value.toString());
      if (object) {
        return object.Snm;
      }
    }


    return (
      <>

        {/* Iterate over the "item" properties of the object */}
        {/* <SeriesArchiveDataTable name="noman" title="react developer"/> */}
        {/* <div>
        {this.props.myData}
        </div> */}
        {Object.entries(this.props.obj).map(([key, value1]) => {
          if (key.startsWith("item")) {
            return (
              <table class="table table-dark table-striped">
                {/* Innings Title, Part, Wicket, Over */}
                <thead>
                  <tr>
                    {/* <div>
                   {this.props.myData}
                  </div> */}
                    <th class="table-header">{value1.Ti}</th>
                    <th colSpan="7" class="table-header text-end">
                      {value1.Pt +
                        " - " +
                        value1.Wk +
                        " (" +
                        value1.Ov +
                        " Ov)"}
                    </th>
                  </tr>
                </thead>

                {/* Batting Section */}
                <tbody>
                  <tr>
                    <th>Batter</th>
                    <th>C&B</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                    <th></th>
                  </tr>
                  {value1.Bat.map((player) => (
                    <tr>
                      <td>{findPlayer(player.Pid)}</td>
                      <td>{player.LpTx}</td>
                      <td>{player.R}</td>
                      <td>{player.B}</td>
                      <td>{player.$4}</td>
                      <td>{player.$6}</td>
                      <td colSpan="2">{player.Sr}</td>
                    </tr>
                  ))}
                  {/*Extras	11 (WB 1,LB 7,NB 0,Pen 0) */}
                  <tr>
                    <td colSpan="8">
                      {"Extras " +
                        value1.Ex +
                        " (WB " +
                        value1.WB +
                        ", LB " +
                        value1.LB +
                        ", NB " +
                        value1.NB +
                        ", Pen " +
                        value1.Pen +
                        ")"}{" "}
                    </td>
                  </tr>
                  {/* fall of wicket section started here */}
                  <tr>
                    <td colSpan="8" className="ta-fow">
                      {/* <h5>Fall of wickets</h5> */}
                      {value1.FoW ? value1.FoW.map((player) => {
                        return (
                          player.R +
                          "-" +
                          player.WkN +
                          " (" +
                          findPlayer(player.Pid) +
                          ", " +
                          player.B +
                          "), " +
                          " "
                        );
                      }) : ""}
                    </td>
                  </tr>
                </tbody>

                <br />
                {/* bowler section started here */}
                <thead>
                  <tr>
                    <th>Bowler</th>
                    <th>O</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>NB</th>
                    <th>WD</th>
                    <th>ECO</th>
                  </tr>
                </thead>
                {/* Batting Section */}
                <tbody>
                  {/* <tr>
                    <th>Player</th>
                    <th>C&B</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr> */}
                  {value1.Bow.map((player) => (
                    <tr>
                      <td>{findPlayer(player.Pid)}</td>
                      <td>{player.Ov}</td>
                      <td>{player.Md}</td>
                      <td>{player.R}</td>
                      <td>{player.Wk}</td>
                      <td>{player.NB}</td>
                      <td>{player.WB}</td>
                      <td>{player.Er}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
        })}
      </>
    );
  }
}
export default CricketScoreBoardDataTable;
