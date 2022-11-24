import React from "react";
import { Link } from "react-router-dom";

function Third() {
  return (
    <React.Fragment>
      <section className="home-main-section">
        {/* left section starts here */}
        <div className="container">
          {/* page changing tab */}
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <Link to="/first">
                <div className="page-changing-tab">
                  <span>Standings</span>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4">
              <Link to="/second">
              <div className="page-changing-tab">
                <span>Matches</span>
              </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="page-changing-tab bg-yellow">
                <span>News</span>
              </div>
            </div>
          </div>

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
              {/* Group H Starts here */}
              <div className="group-H mt-40">
                    <h2>Nov 20, 2022</h2>

                    {/* header part */}
                    {/* <div className="table-header">
                        <div className="table-row">
                            <div className="table-cell">22.00</div>
                            <div className="table-cell"></div>
                            <div className="table-cell">Qatar</div>
                            <div className="table-cell">VS</div>
                            <div className="table-cell">Ecuador</div>
                            <div className="table-cell"></div>
                            <div className="table-cell"></div>
                            <div className="table-cell"></div>
                            <div className="table-cell"></div>
                        </div>
                    </div> */}
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
    </React.Fragment>
  );
}

export default Third;
