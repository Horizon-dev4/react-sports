import React from 'react';
import { Link } from 'react-router-dom';
import "./Lol.css";

function Lol() {
  return (
    <>
      <section className="home-main-section">
        <div className="container-fluid">
          {/* page changing tab */}
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="games-menu">
                <ul>
                  <li>
                    <Link to="/csgo">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/csgo-game-logo.png" />
                      cs:go
                    </Link>
                  </li>
                  <li>
                    <Link to="/dota2">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/dota-game-logo.png" />
                      dota 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/lol">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/lol-game-logo.png" />
                      lol
                    </Link>
                  </li>
                  <li>
                    <Link to="/overwatch2">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/overwatch-game-logo.png" />
                      overwatch 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/valorant">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/valorant-game-logo.png" />
                      valorant
                    </Link>
                  </li>
                  <li>
                    <Link to="/fortnite">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/fortnite-game-logo.png" />
                      fortnite
                    </Link>
                  </li>
                  <li>
                    <Link to="/call-of-duty">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/call-of-duty-game-logo.png" />
                      call of duty
                    </Link>
                  </li>
                  <li>
                    <Link to="/starcraft">
                      <img src="https://www.esports.net/wp-content/uploads/2021/11/starcraft-game-logo.png" />
                      starcraft
                    </Link>
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
                    <a href="javascript:void(0)"> FIFA World Cup 2022 </a>
                  </li>
                  <li className="tournament-item">
                    <a href="javascript:void(0)"> IEM Clogne 2022 </a>
                  </li>
                  <li className="tournament-item">
                    <a href="javascript:void(0)"> BAN vs WES Series </a>
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
                        <h4>LOL MATCHES AND ODDS</h4>
                        <div className="line"></div>
                    </div>
                    
                    {/* matches with prediction tab */}
                  <div class="match-schedule-items-wrapper">
                    <h4 class="date-title">Friday – 04/09/2022</h4>
                    <div class="match-item-outer">
                      <div class="match-time">
                        <i class="fas fa-futbol"></i>
                        <p>17:00</p>
                      </div>
                      <div class="match-name">
                        <p>
                          Natus Vincere <b> VS </b> Astralis
                        </p>
                      </div>
                      <div class="match-type">
                        <p>IEM Tournaments</p>
                      </div>
                      <div class="predition-btn">
                        <Link to="/Prediction"> Prediction </Link>
                      </div>
                    </div>
                    <div class="match-item-outer">
                      <div class="match-time">
                        <i class="fas fa-futbol"></i>
                        <p>12:00</p>
                      </div>
                      <div class="match-name">
                        <p>
                          Natus Vincere <b> VS </b> Astralis
                        </p>
                      </div>
                      <div class="match-type">
                        <p>IEM Tournaments</p>
                      </div>
                      <div class="predition-btn">
                        <Link to="/Prediction"> Prediction </Link>
                      </div>
                    </div>
                    <div class="match-item-outer">
                      <div class="match-time">
                        <i class="fas fa-futbol"></i>
                        <p>15:00</p>
                      </div>
                      <div class="match-name">
                        <p>
                          Natus Vincere <b> VS </b> Astralis
                        </p>
                      </div>
                      <div class="match-type">
                        <p>IEM Tournaments</p>
                      </div>
                      <div class="predition-btn">
                        <Link to="/Prediction"> Prediction </Link>
                      </div>
                    </div> 
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
  )
}

export default Lol
