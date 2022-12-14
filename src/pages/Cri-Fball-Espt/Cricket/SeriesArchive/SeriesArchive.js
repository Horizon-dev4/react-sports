import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
// import "../App.css";

export default class SeriesArchive extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
  }

  componentDidMount() {
    const dateOfXDay = (xDay = -1) => {
      // Get today's date
      let today = new Date();
      // Change the date by adding 1 to it (today + 1 = tomorrow)
      today.setDate(today.getDate() + xDay);
      // return yyyy-mm-dd format
      let x = today
        .toISOString()
        .split("T")[0]
        .split("-");
      return x[0] + x[1] + x[2];
      // return today.toISOString();
    };

    let e = dateOfXDay();
    console.log(e);

    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/list-by-date",
      params: { Category: "cricket", Date: e, Timezone: "6" },
      headers: {
        "x-rapidapi-key": "b6e89817d6msh36107de73277139p116779jsne307fb015e33",
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({ usersCollection: response.data.Stages });
        // console.log(this.state.usersCollection);
        console.log(response.data);
        // for (const [key, value] of Object.entries(response.data)) {
        //   const firstentry = value;
        //   console.log("Stages", key);
        //   // firstentry.forEach((p, i) => {
        //   //   console.log("StartDate: ", p.Events[0].Esd);
        //   //   console.log("EndDate :", p.Events[0].Ese);
        //   //   console.log("Country :", p.Snm);
        //   //   console.log("Tournaments :", p.Cnm);
        //   //   console.log("Status :", p.Events[0].ECo);
        //   // });
        // }
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
                      <h4>Cricket Schedule</h4>
                      {/* <div className="line"></div> */}
                    </div>

                    <div className="wrapper-users">
                      <div className="container">
                        <div>{this.dataTable()}</div>
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
    );
  }
}
