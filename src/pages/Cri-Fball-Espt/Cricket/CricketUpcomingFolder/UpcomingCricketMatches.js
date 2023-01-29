import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UpcomingCricketDataTable from './UpcomingCricketDataTable';


// import "../App.css";

export default class UpcomingCricketMatches extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
  }

  componentDidMount() {
    // function formatDate(date) {
    //   var d = new Date(date),
    //     month = "" + (d.getMonth() + 1),
    //     day = "" + d.getDate(),
    //     year = d.getFullYear();

    //   if (month.length < 2) month = "0" + month;
    //   if (day.length < 2) day = "0" + day;

    //   todayDate = [year, month, day].join("");
    //   return todayDate;

    // }

    //   for (let i = 0; i < 6; i++) {
    //     // const today = new Date();
    //     let nextDate = new Date();
    //     nextDate.setDate(nextDate.getDate() + i);

    //     let newDate = formatDate(nextDate);
    //     console.log(newDate);

    //     // setTimeout(() => {
    //     //    console.log("this is the first message");
    //     //  }, 5000);

    // }

    // let currentDate = new Date().toISOString().slice(0, 10);
    // console.log(currentDate);

    const tomorrow = () => {
      // Creating the date instance
      let d = new Date();

      // Adding one date to the present date
      d.setDate(d.getDate() + 1);

      let year = String(d.getFullYear());
      let month = String(d.getMonth() + 1);
      let day = String(d.getDate());

      // Adding leading 0 if the day or month
      // is one digit value
      month = month.length == 1 ? month.padStart("2", "0") : month;

      day = day.length == 1 ? day.padStart("2", "0") : day;
      // Printing the present date
      console.log(`${year}-${month}-${day}`);
      return year.concat(month, day);
    };

    let d = tomorrow();
    console.log(d);

    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/list-by-date",
      params: { Category: "cricket", Date: d, Timezone: "6" },
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

  UpcomingCricketDataTable() {
    return this.state.usersCollection.map((data, i) => {
      return <UpcomingCricketDataTable obj={data} key={i} />;
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
                      <a href="#"> Comming  </a>
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

                    <div className="wrapper-users">
                      <div className="container">
                        <div>{this.UpcomingCricketDataTable()}</div>
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
                      <span>Update:</span>
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
