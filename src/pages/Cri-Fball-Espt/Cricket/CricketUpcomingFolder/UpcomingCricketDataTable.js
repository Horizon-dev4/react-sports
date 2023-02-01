import React, { Component } from "react";
import "./UpcomingCricketMatches.css";

export default class UpcomingCricketDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Hello World'
    }
  }
  render() {
    
    return (
      
      <>
        <div className="cricket-live-score">
            <div className="row">

              <div className="col-md-12 col-sm-12">
                <div className="cricket-score-middle">
                  <h4>{this.props.obj.Snm}</h4>
                  {this.props.obj.Events[0].T1[0].Nm}
                  <br></br>
                  {this.props.obj.Events[0].T2[0].Nm}
                  <br />
                  {this.props.obj.Events[0].ErnInf ?(
                  <p> {this.props.obj.Events[0].ErnInf +
                      ", " +
                      this.props.obj.Cnm  + ", "+ this.props.obj.Events[0].Esd.toString().slice(8, 10)+ 
                      ":"+ this.props.obj.Events[0].Esd.toString().slice(10, 12)+
                      ", "+ this.props.obj.Events[0].Esd.toString().slice(0, 4)+
                      "-"+this.props.obj.Events[0].Esd.toString().slice(4, 6)+
                      "-"+this.props.obj.Events[0].Esd.toString().slice(6, 8) 
                          }
                  </p> ): `Date will be released soon*`}
                  <p className="team-name-color">
                    <h4>{this.props.obj.Events[0].T1[0].Nm+ ", " + this.props.obj.Cnm}</h4>
                  </p>
                </div>
              </div>
            </div>
          </div>
      
      </>
       
    );
  }
}

