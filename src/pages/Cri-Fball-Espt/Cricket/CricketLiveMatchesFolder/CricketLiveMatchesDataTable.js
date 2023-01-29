import React from "react";
import { useNavigate } from "react-router-dom";

const CricketLiveMatchesDataTable = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Cricket-Scoreboard', { state: { data: props.obj.Events[0].Eid } });
  };


  return (
    <>
      <div className="cricket-live-score">

        <div className="row" onClick={handleClick}>
          <div className="col-md-3 po-1">
            <div className="cricket-team1">

              <p className="team-name-color">
                {props.obj.Events[0].T1[0].Nm}
              </p>
              
              {props.obj.Events[0].Tr1C1 && props.obj.Events[0].Tr1CW1 && props.obj.Events[0].Tr1CO1 ?(
              <p className="team-score-color">
                {
                  props.obj.Events[0].Tr1C1 +
                  "/" +
                  props.obj.Events[0].Tr1CW1+
                  "(Ov " +
                  props.obj.Events[0].Tr1CO1 +
                  ")" +
                  " "}
              </p>
              ): null}

              <p className="team-score-color">
              {props.obj.Events[0].Tr1C2}/
              {props.obj.Events[0].Tr1CW2}
              ({props.obj.Events[0].Tr1CO2})
                
              </p>
            </div>
          </div>

          <div className="col-md-6 po-3">
            <div className="cricket-score-middle">
              <h4>{props.obj.Snm}</h4>
              <p>
                {props.obj.Events[0].ErnInf +
                  ", " +
                  props.obj.Events[0].EpsL}
              </p>
              <p>{props.obj.Sds}</p>

              {/* <p>{this.props.obj.Events[0].Snm}</p> */}
              {/* <p>{this.props.obj.Events[0].Ccd}</p> */}
              <p>
                {props.obj.Events[0].Esd.toString().slice(0, 4) +
                  "-" +
                  props.obj.Events[0].Esd.toString().slice(4, 6) +
                  "-" +
                  props.obj.Events[0].Esd.toString().slice(6, 8) +
                  " " +
                  props.obj.Events[0].Esd.toString().slice(8, 10) +
                  ":" +
                  props.obj.Events[0].Esd.toString().slice(10, 12) +
                  " / "}
                {props.obj.Events[0].Ese.toString().slice(0, 4) +
                  "-" +
                  props.obj.Events[0].Ese.toString().slice(4, 6) +
                  "-" +
                  props.obj.Events[0].Ese.toString().slice(6, 8) +
                  " " +
                  props.obj.Events[0].Ese.toString().slice(8, 10) +
                  ":" +
                  props.obj.Events[0].Ese.toString().slice(10, 12)}
              </p>
              <p></p>
              <p>{props.obj.Events[0].ECo}</p>
            </div>

            <div id="container">
              <button id="button1">AI Prediction</button>
              <button id="button2">Scoreboard</button>
            </div>


          </div>

          <div className="col-md-3 po-2">
            <div className="cricket-team2">
              <p className="team-name-color">
                {props.obj.Events[0].T2[0].Nm}
              </p>
              {props.obj.Events[0].Tr2C1 && props.obj.Events[0].Tr2CW1 && props.obj.Events[0].Tr2CO1 ?(
                <p className="team-score-color">           
                  {props.obj.Events[0].Tr2C1}/
                  {props.obj.Events[0].Tr2CW1}
                  ({props.obj.Events[0].Tr2CO1}){" "}
                                
                </p>
              ): null}
              <p className="team-score-color">
                {props.obj.Events[0].Tr2C2}/
                {props.obj.Events[0].Tr2CW2}
                ({props.obj.Events[0].Tr2CO2}){" "}
                
              </p>
            </div>


          </div>
        </div>

      </div>
    </>
  );
}


export default CricketLiveMatchesDataTable;
