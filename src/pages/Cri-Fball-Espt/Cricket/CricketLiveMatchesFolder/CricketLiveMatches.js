import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CricketLiveMatchesDataTable from "./CricketLiveMatchesDataTable";
export default class CricketLiveMatches extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };

    // this.state = { matchData: [] };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/list-live",
      params: { Category: "cricket", Timezone: "6" },
      headers: {
        "x-rapidapi-key": "b6e89817d6msh36107de73277139p116779jsne307fb015e33",
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
      },
    };
   
    axios
      .request(options)
      .then((response) => {
        // this.setState({ usersCollection: response.data });
        this.setState({ usersCollection: response.data.Stages });
        // this.setState({ matchData: response.data.Stages.Events });

        console.log(this.state.usersCollection);
        
        // console.log(this.state.matchData);
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);

      });
  }

  CricketLiveMatchesDataTable() {
    return this.state.usersCollection.map((data, i) => {
      return <CricketLiveMatchesDataTable obj={data} key={i} />;
    });

  }

  render() {
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
                      <a href="#"> Comming </a>
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
                      {/* <h4>Cricket Schedule</h4> */}
                      {/* <div className="line"></div> */}
                    </div>

                    <div>{this.CricketLiveMatchesDataTable()}</div>
                  </div>
                </div>
              </div>
              {/* Middle Section Ends*/}

              <div className="col-lg-4 col-md-4 forum-items-outer">
                <div className="forum-items-inner">
                  <h6 className="title">Forum</h6>
                  <ul className="forum-items-list">
                    <li className="forum-item">
                      <span>Update: </span>
                      <a href="javascript:void(0)">
                        Comming Soon
                      </a>
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
}
