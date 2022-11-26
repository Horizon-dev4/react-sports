import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/">
                      Current Matches
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Current & Future Series
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Matches By Day
                    </Link>
                  </li>
                  <li>
                    <Link to="/lol">
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link to="/esports">
                      Series Archive
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
                        <h4>LATEST NEWS</h4>
                        <div className="line"></div>
                    </div>

                    {/* Each game row */}
                  {/* <div className="row match-border">
                    <div className="col-lg-3 col-md-3">
                      <div className="live-match-left">
                        <h5>ESL ANZ Championship</h5>
                        <p>21/11/2022 07:00 UTC</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="live-match-middle">
                        <p>Kraken</p>
                        <span>3.55</span>
                        <p>vs.</p>
                        <span>1.25</span>
                        <p>Nut E</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ">
                      <div className="live-match-right">
                        <button>BET NOW</button>
                      </div>
                    </div>
                  </div> */}

                   {/* Each game row */}
                   {/* <div className="row match-border">
                    <div className="col-lg-3 col-md-3">
                      <div className="live-match-left">
                        <h5>ESL ANZ Championship</h5>
                        <p>21/11/2022 07:00 UTC</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="live-match-middle">
                        <p>Kraken</p>
                        <span>3.55</span>
                        <p>vs.</p>
                        <span>1.25</span>
                        <p>Nut E</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ">
                      <div className="live-match-right">
                        <button>BET NOW</button>
                      </div>
                    </div>
                  </div> */}

                   {/* Each game row */}
                   {/* <div className="row match-border">
                    <div className="col-lg-3 col-md-3">
                      <div className="live-match-left">
                        <h5>ESL ANZ Championship</h5>
                        <p>21/11/2022 07:00 UTC</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="live-match-middle">
                        <p>Kraken</p>
                        <span>3.55</span>
                        <p>vs.</p>
                        <span>1.25</span>
                        <p>Nut E</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ">
                      <div className="live-match-right">
                        <button>BET NOW</button>
                      </div>
                    </div>
                  </div> */}
                  
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

export default Cricket
