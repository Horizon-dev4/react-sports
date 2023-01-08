import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyComponent extends Component {
  state = {
    responseData: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const url = "https://livescore6.p.rapidapi.com/matches/v2/get-innings";
    const querystring = { Eid: "836829", Category: "cricket" };
    const headers = {
      "X-RapidAPI-Key": "b6e89817d6msh36107de73277139p116779jsne307fb015e33",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    };

    try {
      const response = await axios.get(url, { headers, params: querystring });
      this.setState({ responseData: response.data });
      
    } catch (error) {
      console.error(error);
    }
    // let mydata = this.state.responseData["Prns"][0];
    // console.log(mydata);
    
    // Object.entries(this.state.responseData).map(
    //   ([key, value]) => (
        
    //     //<li key={key}>{`${key}: ${value}`}</li>
    //     // <p>{`${key}: ${value}`}</p>
    //     console.log(value)
    //     )
    //     )
  };

  
  render() {
    if (!this.state.responseData) {
      return null;
    }

    const result = [];

    for (var i = 0; i < 22; i++) {
      result.push(<Print value={i} key={i} />);
    }
  
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
                    
                    {/* {Object.entries(this.state.responseData.Prns['0']).map(
                      ([key, value]) => (
                        
                        <li className="text-white" key={key}>{`${value}`}</li>

                        
                      )
                    )} */}
                    
                    {/* <div className="text-white">Number - {result}</div> */}
                    {/* <p>{this.state.responseData["Prns"][0]["Snm"]}</p> */}
                    
                    <div className="match-heading">
                      <h4>Cricket Schedule</h4>
                      <p>{this.state.responseData["SDInn"][0]["Pt"]}</p>
                      <p></p>
                      <p>
                        {this.state.responseData["SDInn"][0]["Bat"][0]["R"]}
                      </p>
                      <p>
                        {this.state.responseData["SDInn"][0]["Bat"][0]["$4"]}
                      </p>
                      <p>
                        {this.state.responseData["SDInn"][0]["Bat"][0]["$6"]}
                      </p>
                      <p>
                        {this.state.responseData["SDInn"][0]["Bat"][0]["$6"]}
                      </p>
                      <p>
                        {this.state.responseData["SDInn"][0]["Bat"][0]["$6"]}
                      </p>
                      <p>
                        {this.state.responseData["SDInn"][0]["Bat"][0]["Sr"]}
                      </p>
                      <p>{this.state.responseData["Prns"][1]["Snm"]}</p>

                      {/* <div className="line"></div> */}
                    </div>
                    
                    <div className="d-flex justify-content-between text-white bg-dark mb-2 p-2">
                      <div>{this.state.responseData["SDInn"][0]["Ti"]}</div>
                      <div>
                        {this.state.responseData["SDInn"][0]["Pt"]}-
                        {this.state.responseData["SDInn"][0]["Wk"]} (
                        {this.state.responseData["SDInn"][0]["Ov"]})
                      </div>
                    </div>
                    
                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Batter</th>
                          <th scope="col">R</th>
                          <th scope="col">B</th>
                          <th scope="col">4s</th>
                          <th scope="col">6s</th>
                          <th scope="col">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.responseData["Prns"][0]["Snm"]}</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>{this.state.responseData["Prns"][1]["Snm"]}</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            {this.state.responseData["Prns"][2]["Snm"]}
                          </td>
                          <td>@twitter</td>
                        </tr>
                        <tr>
                          <td>{this.state.responseData["Prns"][3]["Snm"]}</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            {this.state.responseData["Prns"][4]["Snm"]}
                          </td>
                          <td>@twitter</td>
                        </tr>
                        <tr>
                          <td>{this.state.responseData["Prns"][5]["Snm"]}</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <div className="wrapper-users">
                      <div className="container">
                        {}
                        {/* <div class="d-flex justify-content-center">
                          <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div> */}
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

const Print = props => {
  return <div>{props.value}</div>;
};


