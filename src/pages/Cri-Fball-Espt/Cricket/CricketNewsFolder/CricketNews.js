import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CricketNewsDataTable from './CricketNewsDataTable';
export default class CricketNews extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://livescore6.p.rapidapi.com/news/v2/list',
      headers: {
        'X-RapidAPI-Key': 'b6e89817d6msh36107de73277139p116779jsne307fb015e33',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };
   
    axios
      .request(options)
      .then((response) => {
        this.setState({ usersCollection: response.data.homepageArticles });
        console.log(this.state.usersCollection);
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  CricketNewsDataTable() {
    return this.state.usersCollection.map((data, i) => {
      return <CricketNewsDataTable obj={data} key={i} />;
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
                    </div>

                    <div className="wrapper-users">
                      <div className="container">                        
                        <div>{this.CricketNewsDataTable()}</div>
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
                      <span>Update : </span>
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
