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

              </div>
            </div>

            <div className="col-md-6">
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
                  <h4>{this.props.obj.Events[0].T1[0].Nm+ ", " + this.props.obj.Cnm}</h4>
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="cricket-team2">
                <p className="team-name-color">
                  {this.props.obj.Events[0].T2[0].Nm}
                </p>
                

              </div>
            </div>

          </div>
        </div>
      </tr>
    );
  }
}

export default DataTable;
