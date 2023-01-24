import React from "react";
import { Link } from "react-router-dom";
import "./Cricket.css";

function Cricket() {
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
                    <Link to="/Live-Cricket-Matches">Today Matches</Link>
                  </li>
                  <li>
                    <Link to="/upcoming-cricket-matches">Upcoming Matches</Link>
                  </li>
                  {/* <li>
                    <Link to="/matchesbyday">Matches By Day</Link>
                  </li> */}
                  <li>
                    <Link to="/Cricket-News">News</Link>
                  </li>
                  <li>
                    <Link to="/Live-Cricket-Result">Results Archive</Link>
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
                    <h3>Cricket Betting Prediction, Tips and Odds</h3>

                    {/* <div className="line"></div> */}
                  </div>
                  <div className="para">
                    <p>
                      Get latest Cricket Betting Tips, Match Predictions, Guide
                      and Live Odds for all major tournaments and leagues. Bet
                      online by checking tips from our experts.
                    </p>
                  </div>
                  

                  <div
                    id="carouselExampleCaptions"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="cricket">
                          <div class="tournament_details">
                            <span class="1">T10</span>
                            <strong>T10 League</strong>
                          </div>
                          <div class="match_detail_center">
                            Nov 27, 2022 - 07:00 IST / 1:30 GMT
                          </div>
                          <div class="location">
                            Sheikh Zayed Stadium, Abu Dhabi - United Arab
                            Emirates
                          </div>
                          <div class="match_details_team1l">
                            <div class="teamname">Bangla Tigers</div>
                            <div class="team_a_6541">0/0(0)</div>
                          </div>
                          <div class="match_details_team1l">
                            <div class="teamname">Northern Warriors</div>
                            <div class="team_a_6541">0/0 (0)</div>
                          </div>
                          <div class="match_start_status">
                            Prediction Coming soon
                          </div>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                          {/* <h5>First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p> */}
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="cricket">
                          <div class="tournament_details">
                            <span class="1">ODI</span>
                            <strong>NZ vs IND 2nd ODI</strong>
                          </div>
                          <div class="match_detail_center">
                            Nov 27, 2022 - 07:00 IST / 1:30 GMT
                          </div>
                          <div class="location">
                            Seddon Park, Hamilton - New Zealand
                          </div>

                          <div class="match_details_team1l">
                            <div class="teamname">New Zealand</div>
                            <div class="team_a_6541">255/8(50)</div>
                          </div>

                          <div class="match_details_team1l">
                            <div class="teamname">India</div>
                            <div class="team_a_6541">22/0 (4.5)</div>
                          </div>
                          <div class="match_start_status">
                            Prediction Coming soon
                          </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block"></div>
                      </div>
                      <div class="carousel-item">
                        <div class="cricket">
                          <div class="tournament_details">
                            <span class="1">ODI</span>
                            <strong>SL vs AFG 2nd ODI</strong>
                          </div>
                          <div class="match_detail_center">
                            Nov 27, 2022 - 07:00 IST / 1:30 GMT
                          </div>
                          <div class="location">
                            Pallekele Cricket Stadium, Kandy - Sri Lanka
                          </div>

                          <div class="match_details_team1l">
                            <div class="teamname">Sri Lanka</div>
                            <div class="team_a_6541">0/0(0)</div>
                          </div>

                          <div class="match_details_team1l">
                            <div class="teamname">Afghanistan</div>
                            <div class="team_a_6541">0/0 (0)</div>
                          </div>
                          <div class="match_start_status">
                            Prediction Coming soon
                          </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block"></div>
                      </div>

                      <div class="carousel-item">
                        <div class="cricket">
                          <div class="tournament_details">
                            <span class="1">ODI</span>
                            <strong>SL vs AFG 2nd ODI</strong>
                          </div>
                          <div class="match_detail_center">
                            Nov 27, 2022 - 07:00 IST / 1:30 GMT
                          </div>
                          <div class="location">
                            Pallekele Cricket Stadium, Kandy - Sri Lanka
                          </div>

                          <div class="match_details_team1l">
                            <div class="teamname">Sri Lanka</div>
                            <div class="team_a_6541">0/0(0)</div>
                          </div>

                          <div class="match_details_team1l">
                            <div class="teamname">Afghanistan</div>
                            <div class="team_a_6541">0/0 (0)</div>
                          </div>
                          <div class="match_start_status">
                            Prediction Coming soon
                          </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block"></div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
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
}

export default Cricket;
