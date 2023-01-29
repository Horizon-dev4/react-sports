import React from "react";
// import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResultDataTable = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Cricket-Scoreboard', { state: { data: props.obj.Events[0].Eid } });
  };
// const variableid = this.props.obj.Events[0].Eid;
return (
<>
<div className="cricket-live-score">
          <div className="row" onClick={handleClick}>
            <div className="col-md-3 po-1">
              <div className="cricket-team1">
                <p className="team-name-color" style={{display: "inline-block"}}>
                  {props.obj.Events[0].T1[0].Nm}
                </p>
                {props.obj.Events[0].Tr1C1 && props.obj.Events[0].Tr1CW1 && props.obj.Events[0].Tr1CO1 ?(
                <p className="team-score-color">
                  {"(" +
                    props.obj.Events[0].Tr1CO1 +
                    ")" +
                    " " +
                    props.obj.Events[0].Tr1C1 +
                    "/" +
                    props.obj.Events[0].Tr1CW1}
                </p>
                ): null}
              </div>
            </div>

            <div className="col-md-6 po-3">
              <div className="cricket-score-middle">
                <h4>{props.obj.Snm}</h4>
                <p>
                  {" "}
                  {props.obj.Events[0].ErnInf +
                    ", " +
                    props.obj.Cnm +
                    ", " +
                    props.obj.Events[0].Esd.toString().slice(8, 10) +
                    ":" +
                    props.obj.Events[0].Esd.toString().slice(10, 12) +
                    ", " +
                    props.obj.Events[0].Esd.toString().slice(0, 4) +
                    "-" +
                    props.obj.Events[0].Esd.toString().slice(4, 6) +
                    "-" +
                    props.obj.Events[0].Esd.toString().slice(6, 8)}
                </p>
                <p className="team-name-color">{props.obj.Events[0].ECo}</p>
              </div>
              <div id="container">
              <button className="" id="button2">Scoreboard</button>
            </div>
            </div>
            
            <div className="col-md-3 po-2">
              <div className="cricket-team2">
                <p className="team-name-color">
                  {props.obj.Events[0].T2[0].Nm}
                </p>
                <p className="team-score-color">
                  ({props.obj.Events[0].Tr2CO1}){" "}
                  {props.obj.Events[0].Tr2C1}/
                  {props.obj.Events[0].Tr2CW1}
                </p>

              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }


export default ResultDataTable;
