import React from 'react';
import { Link } from 'react-router-dom';
import "./First.css";

function First() {
  return (
    <React.Fragment>
      
      <section className="home-main-section">

        {/* left section starts here */}
        <div className="container">
          {/* page changing tab */}
        <div className='row'>
          <div className='col-lg-4 col-md-4'>
            <div className='page-changing-tab bg-yellow'>
              <span>Standings</span>
            </div>
          </div>

          <div className='col-lg-4 col-md-4'>
              <Link to="/second">
                <div className='page-changing-tab'>
                    <span>Matches</span>
                </div>
              </Link>
          </div>
          
          <div className='col-lg-4 col-md-4'>
            <Link to="/third">
            <div className='page-changing-tab'>
              <span>News</span>
            </div>
            </Link>
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
              <div className='group-A'>
              <h2>Group A</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>Qatar</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Ecuador</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Senegal</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Netherlands</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group B Starts here */}
              <div className='group-B mt-40'>
              <h2>Group B</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>England</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Iran</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>United States</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Wales</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group C Starts here */}
              <div className='group-C mt-40'>
              <h2>Group C</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>Argentina</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Saudi Arabia</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Mexico</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Poland</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group D Starts here */}
            <div className='group-D mt-40'>
              <h2>Group D</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>France</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Australia</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Denmark</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Tunisia</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group E Starts here */}
              <div className='group-E mt-40'>
              <h2>Group E</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>Spain</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Costa Rica</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Germany</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Japan</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group F Starts here */}
              <div className='group-F mt-40'>
              <h2>Group F</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>Belgium</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Canada</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Morocco</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Croatia</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group G Starts here */}
              <div className='group-G mt-40'>
              <h2>Group G</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>Brazil</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Serbia</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Switzerland</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Cameroon</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
              </div>
              </div>

              {/* Group H Starts here */}
              <div className='group-H mt-40'>
              <h2>Group H</h2>
              {/* header part */}
              <div className='table-header'>
                <div className='table-row'>
                  <div className='table-cell'>Pos</div>
                  <div className='table-cell'>Team</div>
                  <div className='table-cell'>P</div>
                  <div className='table-cell'>W</div>
                  <div className='table-cell'>D</div>
                  <div className='table-cell'>L</div>
                  <div className='table-cell'>+/-L</div>
                  <div className='table-cell'>PTSL</div>
                </div>
              </div>
              {/* body part */}
              <div className='table-body'>
                <div className='table-row'>
                  <div className='table-cell'>1</div>
                  <div className='table-cell'>Portugal</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>2</div>
                  <div className='table-cell'>Ghana</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>3</div>
                  <div className='table-cell'>Uruguay</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>4</div>
                  <div className='table-cell'>Korea Republic</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
                  <div className='table-cell'>0</div>
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
    </React.Fragment>
  )
}

export default First
