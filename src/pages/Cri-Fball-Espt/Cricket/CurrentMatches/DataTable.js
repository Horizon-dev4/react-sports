import React, { Component } from "react";

class DataTable extends Component {
  render() {
    return (
      <tr>
        <div className="cricket-live-score">
          <div className="row"> 

            <div className="col-md-3">
            <div className="cricket-team1">
              <p className="team-name-color">
                {this.props.obj.Events[0].T1[0].Nm}
              </p>
              <p className="team-score-color">
                {"(" +
                  this.props.obj.Events[0].Tr1CO1 +
                  ")" +
                  " " +
                  this.props.obj.Events[0].Tr1C1 +
                  "/" +
                  this.props.obj.Events[0].Tr1CW1}
              </p>
              <p className="team-score-color">
                ({this.props.obj.Events[0].Tr1CO2}){" "}
                {this.props.obj.Events[0].Tr1C2}/
                {this.props.obj.Events[0].Tr1CW2}
              </p>
            </div>
            </div>

            <div className="col-md-6">
            <div className="cricket-score-middle">
              <h4>{this.props.obj.Snm}</h4>
              <p>
                {this.props.obj.Events[0].ErnInf +
                  ", " +
                  this.props.obj.Events[0].EpsL} 
                  

              </p>
              <p>{this.props.obj.Sds}</p>

              {/* <p>{this.props.obj.Events[0].Snm}</p> */}
              {/* <p>{this.props.obj.Events[0].Ccd}</p> */}
              <p>
                {this.props.obj.Events[0].Esd.toString().slice(0, 4) +
                  "-" +
                  this.props.obj.Events[0].Esd.toString().slice(4, 6) +
                  "-" +
                  this.props.obj.Events[0].Esd.toString().slice(6, 8) +
                  " " +
                  this.props.obj.Events[0].Esd.toString().slice(8, 10) +
                  ":" +
                  this.props.obj.Events[0].Esd.toString().slice(10, 12) +
                  " / "}
                {this.props.obj.Events[0].Ese.toString().slice(0, 4) +
                  "-" +
                  this.props.obj.Events[0].Ese.toString().slice(4, 6) +
                  "-" +
                  this.props.obj.Events[0].Ese.toString().slice(6, 8) +
                  " " +
                  this.props.obj.Events[0].Ese.toString().slice(8, 10) +
                  ":" +
                  this.props.obj.Events[0].Ese.toString().slice(10, 12)}
              </p>
              <p></p>
              <p>{this.props.obj.Events[0].ECo}</p>
            </div>
            </div>

            <div className="col-md-3">
            <div className="cricket-team2">
              <p className="team-name-color">
                {this.props.obj.Events[0].T2[0].Nm}
              </p>
              <p className="team-score-color">
                ({this.props.obj.Events[0].Tr2CO1}){" "}
                {this.props.obj.Events[0].Tr2C1}/
                {this.props.obj.Events[0].Tr2CW1}
              </p>
              <p className="team-score-color">
                ({this.props.obj.Events[0].Tr2CO2}){" "}
                {this.props.obj.Events[0].Tr2C2}/
                {this.props.obj.Events[0].Tr2CW2}
              </p>
            </div>
            </div>
          </div>
        </div>
        {/* <td>{this.props.obj.Esd}</td>
        <td>{this.props.obj.ErnInf}</td>
        <td>{this.props.obj.T1[0].Nm}</td>
        <td>{this.props.obj.Tr1C1}</td>
        <td>{this.props.obj.Tr1CW1}</td>
        <td>{this.props.obj.Tr1CO1}</td>
        <td>{this.props.obj.T2[0].Nm}</td>
        <td>{this.props.obj.Tr2C1}</td>
        <td>{this.props.obj.Tr2CW1}</td>
        <td>{this.props.obj.Tr2CO1}</td>
        <td>{this.props.obj.Stg.Cnm}</td>
        <td>{this.props.obj.ECo}</td>
        {/* <td>{this.props.obj.Events.ECo}</td> */}
        {/* <td>{this.props.obj.Scd}</td> */}
      </tr>
    );
  }
}

export default DataTable;