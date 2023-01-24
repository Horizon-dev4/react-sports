import axios from "axios";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from 'react';
import CricketScoreBoardDataTable from "./CricketScoreBoardDataTable";

const CricketScoreBoard = (props) => {
  const [usersCollection, setUsersCollection] = useState([]);
  const location = useLocation();
  // console.log(location.state.data);

  useEffect(() => {
    if(location.state && location.state.data){
        let eventid = location.state.data;
        let options = {};
        if(eventid){
            options = {
              method: "GET",
              url: "https://livescore6.p.rapidapi.com/matches/v2/get-innings",
              params: { Eid: eventid, Category: "cricket" },
              headers: { 
                "x-rapidapi-key": "b6e89817d6msh36107de73277139p116779jsne307fb015e33",
                "x-rapidapi-host": "livescore6.p.rapidapi.com",
              },
            };
        }
    
        axios
          .request(options)
          .then((response) => {
        
            let inn_dct1 = {};
            const itemslst = ["item1", "item2", "item3","item4"];
            for (let i = 0; i < response.data.SDInn.length; i++) {
              inn_dct1[itemslst[i]] = response.data.SDInn[i]
            }
            let inn_dct2 = {};
            for (let i = 0; i < response.data.Prns.length; i++) {
              let num = i
              let pl = 'pl'
              inn_dct2[pl.concat(num.toString())] = response.data.Prns[i]
            }
            const object3 = Object.assign(inn_dct2, inn_dct1);
            setUsersCollection([object3]);
            console.log(object3);
          })
          .catch(function(error) {
            console.error(error);
          });
    }
  }, [location]);



  return (
    <>
    {/* <SeriesArchiveDataTable name="noman" title="react developer"/> */}

      <section className="home-main-section">
          <div className="container-fluid">
            {/* page changing tab */}
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="games-menu">
                  <ul>
                    <li>
                      <Link to="/Live-Cricket-Matches">LIVE MATCHES</Link>
                    </li>
                    <li>
                      <Link to="/Cricket-Result">RESULTS</Link>
                    </li>
                    <li>
                      <Link to="/upcoming-cricket-matches">UPCOMING MATCHES</Link>
                    </li>
                    <li>
                      <Link to="/Cricket-News">NEWS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* left section starts here */}
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 tournament-items-outer">
                <div className="tournament-items-inner">
                  <h6 className="title">Tournaments</h6>
                  <ul className="tournament-items-list">
                    <li className="tournament-item">
                      <a href="#"> International </a>
                    </li>
                    <li className="tournament-item">
                      <a href="#"> League </a>
                    </li>
                    <li className="tournament-item">
                      <a href="#"> Domestic </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Middle Section Starts */}
              <div className="col-lg-6 col-md-6 match-category-items-outer middle">
                {/* Total game row */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="match-heading">
                      
                    </div>

                    <div className="wrapper-users">
                      <div className="container">

                        {}
                        {/* <div class="d-flex justify-content-center">
                          <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div> */}
                        <div>{usersCollection.map((data, i) => {
                          return <CricketScoreBoardDataTable obj={data} key={i} />;
                      })}</div>
                        
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              {/* Middle Section Ends*/}

              <div className="col-lg-4 col-md-4 forum-items-outer">
                <div className="forum-items-inner">
                  <h6 className="title">Forum</h6>
                  <ul className="forum-items-list">
                    <li className="forum-item">
                      <span>CSGO:</span>
                      <a href="javascript:void(0)">
                        {" "}
                        Navi in terrific form (128){" "}
                      </a>
                    </li>
                    <li className="forum-item">
                      <span>News:</span>
                      <a href="javascript:void(0)"> Bangladesh ranks 3 (67) </a>
                    </li>
                    <li className="forum-item">
                      <span>Football:</span>
                      <a href="javascript:void(0)">
                        Messi will win worldcup this year (530)
                      </a>
                    </li>
                    <li className="forum-item">
                      <span>CSGO:</span>
                      <a href="javascript:void(0)"> Navi vs Astralis (448) </a>
                    </li>
                    <li className="forum-item">
                      <span>Off Topic:</span>
                      <a href="javascript:void(0)"> RIP Shinjo Abe(142) </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};
export default CricketScoreBoard;