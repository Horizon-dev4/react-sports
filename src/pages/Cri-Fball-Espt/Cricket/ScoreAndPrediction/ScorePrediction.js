import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";

export default class CurrentMatches extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };

    // this.state = { matchData: [] };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-innings",
      params: { Eid: "836829", Category: "cricket" },
      headers: {
        "x-rapidapi-key": "b6e89817d6msh36107de73277139p116779jsne307fb015e33",
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        // this.setState({ usersCollection: response.data });
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

        this.setState({

          
          usersCollection: [object3],
        });
        // this.setState({ matchData: response.data.Stages.Events });
        
        console.log(object3);
        console.log(this.state.usersCollection);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  dataTable() {
    return this.state.usersCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
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
                      <Link to="/currentmatches">TODAY MATCHES</Link>
                    </li>
                    <li>
                      <Link to="/seriesarchive">RESULTS</Link>
                    </li>
                    <li>
                      <Link to="/currentfutureseries">UPCOMING MATCHES</Link>
                    </li>
                    <li>
                      <Link to="/teams">Teams</Link>
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
                      <h4>Cricket Scored Card</h4>
                      {/* <div className="line"></div> */}
                    </div>

                    <div className="wrapper-users">
                      <div className="container">
                        {}
                        {/* <div class="d-flex justify-content-center">
                          <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div> */}
                        <div>{this.dataTable()}</div>
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
  }
}
