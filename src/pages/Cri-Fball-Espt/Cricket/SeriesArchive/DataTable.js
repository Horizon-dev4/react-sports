import React, { Component } from "react";

class DataTable extends Component {
  render() {
    return (
      <tr>
        {/* <td>{this.props.obj.Events[0].Esd}</td>
        <td>{this.props.obj.Snm}</td>
        <td>{this.props.obj.Cnm}</td>
        <td>{this.props.obj.Events[0].ECo}</td> */}

      <div className="cricket-live-score">
          <div className="cricket-live-score-details">
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

            </div>
            <div className="cricket-score-middle">
               <h4>{this.props.obj.Snm}</h4>
              <p> {this.props.obj.Events[0].ErnInf +
                  ", " +
                  this.props.obj.Cnm  + ", "+ this.props.obj.Events[0].Esd.toString().slice(8, 10)+ 
                  ":"+ this.props.obj.Events[0].Esd.toString().slice(10, 12)+
                  ", "+ this.props.obj.Events[0].Esd.toString().slice(0, 4)+
                  "-"+this.props.obj.Events[0].Esd.toString().slice(4, 6)+
                  "-"+this.props.obj.Events[0].Esd.toString().slice(6, 8) 
                      }
              </p>
              <p className="team-name-color">
                {this.props.obj.Events[0].ECo}
              </p>
            </div>
            <div className="cricket-team2">
              <p className="team-name-color">
                {this.props.obj.Events[0].T2[0].Nm}
              </p>
              <p className="team-score-color">
                ({this.props.obj.Events[0].Tr2CO1}){" "}
                {this.props.obj.Events[0].Tr2C1}/
                {this.props.obj.Events[0].Tr2CW1}
              </p>
              

            </div>
          </div>
        </div>
      </tr>
    );
  }
}

export default DataTable;
