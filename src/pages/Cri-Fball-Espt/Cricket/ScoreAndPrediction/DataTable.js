import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ScorePrediction.css";

class DataTable extends Component {
  render() {
    // const {one, ...rest} = this.props.obj.SDInn;
    // console.log(one)
    return (
      <>
        <div className="d-flex justify-content-between text-white bg-dark mb-2 p-2">
          <div>{this.props.obj.Ti}</div>
          {/* <div>{console.log(Object.keys(this.props.obj.SDInn))}</div> */}
          <div>
            {this.props.obj.Pt}-{this.props.obj.Wk} ({this.props.obj.Ov})
          </div>
        </div>

        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Batters</th>
              <th scope="col">C&B</th>
              <th scope="col">R</th>
              <th scope="col">B</th>
              <th scope="col">4s</th>
              <th scope="col">6s</th>
              <th scope="col">SR</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.props.obj.Bat[0].Pid}</td>
              <td>{this.props.obj.Bat[0].LpTx}</td>
              <td>{this.props.obj.Bat[0].R}</td>
              <td>{this.props.obj.Bat[0].B}</td>
              <td>{this.props.obj.Bat[0].$4}</td>
              <td>{this.props.obj.Bat[0].$6}</td>
              <td>{this.props.obj.Bat[0].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[1].Pid}</td>
              <td>{this.props.obj.Bat[1].LpTx}</td>
              <td>{this.props.obj.Bat[1].R}</td>
              <td>{this.props.obj.Bat[1].B}</td>
              <td>{this.props.obj.Bat[1].$4}</td>
              <td>{this.props.obj.Bat[1].$6}</td>
              <td>{this.props.obj.Bat[1].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[2].Pid}</td>
              <td>{this.props.obj.Bat[2].LpTx}</td>
              <td>{this.props.obj.Bat[2].R}</td>
              <td>{this.props.obj.Bat[2].B}</td>
              <td>{this.props.obj.Bat[2].$4}</td>
              <td>{this.props.obj.Bat[2].$6}</td>
              <td>{this.props.obj.Bat[2].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[3].Pid}</td>
              <td>{this.props.obj.Bat[3].LpTx}</td>
              <td>{this.props.obj.Bat[3].R}</td>
              <td>{this.props.obj.Bat[3].B}</td>
              <td>{this.props.obj.Bat[3].$4}</td>
              <td>{this.props.obj.Bat[3].$6}</td>
              <td>{this.props.obj.Bat[3].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[4].Pid}</td>
              <td>{this.props.obj.Bat[4].LpTx}</td>
              <td>{this.props.obj.Bat[4].R}</td>
              <td>{this.props.obj.Bat[4].B}</td>
              <td>{this.props.obj.Bat[4].$4}</td>
              <td>{this.props.obj.Bat[4].$6}</td>
              <td>{this.props.obj.Bat[4].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[5].Pid}</td>
              <td>{this.props.obj.Bat[5].LpTx}</td>
              <td>{this.props.obj.Bat[5].R}</td>
              <td>{this.props.obj.Bat[5].B}</td>
              <td>{this.props.obj.Bat[5].$4}</td>
              <td>{this.props.obj.Bat[5].$6}</td>
              <td>{this.props.obj.Bat[5].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[6].Pid}</td>
              <td>{this.props.obj.Bat[6].LpTx}</td>
              <td>{this.props.obj.Bat[6].R}</td>
              <td>{this.props.obj.Bat[6].B}</td>
              <td>{this.props.obj.Bat[6].$4}</td>
              <td>{this.props.obj.Bat[6].$6}</td>
              <td>{this.props.obj.Bat[6].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[7].Pid}</td>
              <td>{this.props.obj.Bat[7].LpTx}</td>
              <td>{this.props.obj.Bat[7].R}</td>
              <td>{this.props.obj.Bat[7].B}</td>
              <td>{this.props.obj.Bat[7].$4}</td>
              <td>{this.props.obj.Bat[7].$6}</td>
              <td>{this.props.obj.Bat[7].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[8].Pid}</td>
              <td>{this.props.obj.Bat[8].LpTx}</td>
              <td>{this.props.obj.Bat[8].R}</td>
              <td>{this.props.obj.Bat[8].B}</td>
              <td>{this.props.obj.Bat[8].$4}</td>
              <td>{this.props.obj.Bat[8].$6}</td>
              <td>{this.props.obj.Bat[8].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[9].Pid}</td>
              <td>{this.props.obj.Bat[9].LpTx}</td>
              <td>{this.props.obj.Bat[9].R}</td>
              <td>{this.props.obj.Bat[9].B}</td>
              <td>{this.props.obj.Bat[9].$4}</td>
              <td>{this.props.obj.Bat[9].$6}</td>
              <td>{this.props.obj.Bat[9].Sr}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bat[10].Pid}</td>
              <td>{this.props.obj.Bat[10].LpTx}</td>
              <td>{this.props.obj.Bat[10].R}</td>
              <td>{this.props.obj.Bat[10].B}</td>
              <td>{this.props.obj.Bat[10].$4}</td>
              <td>{this.props.obj.Bat[10].$6}</td>
              <td>{this.props.obj.Bat[10].Sr}</td>
            </tr>

            <tr>
              <td>Extras</td>
              <td colSpan="6">
                {this.props.obj.Ex} ({"WB " + this.props.obj.WB},
                {"LB " + this.props.obj.LB},{"NB " + this.props.obj.NB},
                {"Pen " + this.props.obj.Pen})
              </td>
            </tr>
          </tbody>
        </table>

        <div className="cricket-live-score m-fow">
          <Link to="#">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <h5>Fall of Wickets</h5>
                </div>
                <div>
                  <p>
                    {this.props.obj.FoW[0].R}-{this.props.obj.FoW[0].WkN}(
                    {this.props.obj.FoW[0].Pid},{this.props.obj.FoW[0].B} ),
                    {this.props.obj.FoW[1].R}-{this.props.obj.FoW[1].WkN}(
                    {this.props.obj.FoW[1].Pid},{this.props.obj.FoW[1].B} ),
                    {this.props.obj.FoW[2].R}-{this.props.obj.FoW[2].WkN}(
                    {this.props.obj.FoW[2].Pid},{this.props.obj.FoW[2].B} ),
                    {this.props.obj.FoW[3].R}-{this.props.obj.FoW[3].WkN}(
                    {this.props.obj.FoW[3].Pid},{this.props.obj.FoW[3].B} ),
                    {this.props.obj.FoW[4].R}-{this.props.obj.FoW[4].WkN}(
                    {this.props.obj.FoW[4].Pid},{this.props.obj.FoW[4].B} ),
                    {this.props.obj.FoW[5].R}-{this.props.obj.FoW[5].WkN}(
                    {this.props.obj.FoW[5].Pid},{this.props.obj.FoW[5].B} ),
                    {this.props.obj.FoW[6].R}-{this.props.obj.FoW[6].WkN}(
                    {this.props.obj.FoW[6].Pid},{this.props.obj.FoW[6].B} )
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <table class="table table-dark table-striped m-bowl">
          <thead>
            <tr>
              <th scope="col">Bowler</th>
              <th scope="col">O</th>
              <th scope="col">M</th>
              <th scope="col">R</th>
              <th scope="col">W</th>
              <th scope="col">NB</th>
              <th scope="col">WD</th>
              <th scope="col">ECO</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.props.obj.Bow[0].Pid}</td>
              <td>{this.props.obj.Bow[0].Ov}</td>
              <td>{this.props.obj.Bow[0].Md}</td>
              <td>{this.props.obj.Bow[0].R}</td>
              <td>{this.props.obj.Bow[0].Wk}</td>
              <td>{this.props.obj.Bow[0].NB}</td>
              <td>{this.props.obj.Bow[0].WB}</td>
              <td>{this.props.obj.Bow[0].Er}</td>

            </tr>

            <tr>
              <td>{this.props.obj.Bow[1].Pid}</td>
              <td>{this.props.obj.Bow[1].Ov}</td>
              <td>{this.props.obj.Bow[1].Md}</td>
              <td>{this.props.obj.Bow[1].R}</td>
              <td>{this.props.obj.Bow[1].Wk}</td>
              <td>{this.props.obj.Bow[1].NB}</td>
              <td>{this.props.obj.Bow[1].WB}</td>
              <td>{this.props.obj.Bow[1].Er}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bow[2].Pid}</td>
              <td>{this.props.obj.Bow[2].Ov}</td>
              <td>{this.props.obj.Bow[2].Md}</td>
              <td>{this.props.obj.Bow[2].R}</td>
              <td>{this.props.obj.Bow[2].Wk}</td>
              <td>{this.props.obj.Bow[2].NB}</td>
              <td>{this.props.obj.Bow[2].WB}</td>
              <td>{this.props.obj.Bow[2].Er}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bow[3].Pid}</td>
              <td>{this.props.obj.Bow[3].Ov}</td>
              <td>{this.props.obj.Bow[3].Md}</td>
              <td>{this.props.obj.Bow[3].R}</td>
              <td>{this.props.obj.Bow[3].Wk}</td>
              <td>{this.props.obj.Bow[3].NB}</td>
              <td>{this.props.obj.Bow[3].WB}</td>
              <td>{this.props.obj.Bow[3].Er}</td>
            </tr>

            <tr>
              <td>{this.props.obj.Bow[4].Pid}</td>
              <td>{this.props.obj.Bow[4].Ov}</td>
              <td>{this.props.obj.Bow[4].Md}</td>
              <td>{this.props.obj.Bow[4].R}</td>
              <td>{this.props.obj.Bow[4].Wk}</td>
              <td>{this.props.obj.Bow[4].NB}</td>
              <td>{this.props.obj.Bow[4].WB}</td>
              <td>{this.props.obj.Bow[4].Er}</td>
            </tr>

           

            {/* <tr>
              <td>Extras</td>
              <td colSpan="7">
                {this.props.obj.Ex} ({"WB " + this.props.obj.WB},
                {"LB " + this.props.obj.LB},{"NB " + this.props.obj.NB},
                {"Pen " + this.props.obj.Pen})
              </td>
            </tr> */}
          </tbody>
        </table>
      </>
    );
  }
}

export default DataTable;
