import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CricketNewsDetails = (props) => {
  const [usersCollection, setUsersCollection] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.data) {
      let newsid = location.state.data;
      console.log(newsid);
      // let newsid = '2023012118493315408'
      console.log(newsid);
      let options = {};
      if (newsid) {
        options = {
          method: "GET",
          url: "https://livescore6.p.rapidapi.com/news/v2/detail",
          params: { id: newsid },
          headers: {
            "x-rapidapi-key":
              "39bcf5b7cemshf14ca5c81884017p11f3f4jsnce700681c6cd",
            "x-rapidapi-host": "livescore6.p.rapidapi.com",
          },
        };
      }

      axios
        .request(options)
        .then((response1) => {
          const contentList = response1.data.article.body.map(
            (d) => d.data.content
          );
          const contentString = contentList.join(" ");
          setUsersCollection(contentString);
          let paragraph = contentString.split("</p>").map((p, index) => {
            return <p key={index}>{p}</p>;
          });
          const plainParagraphs = paragraph.map((p) => {
            return p.props.children.replace(/(<([^>]+)>)/gi, "");
          });
          setParagraphs(plainParagraphs);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [location]);

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
                  <div className="match-heading"></div>

                  <div className="wrapper-users">
                    <div className="container">
                      <div>
                        <h3>{location.state.title}</h3>
                      </div>
                      <p className="category-label">
                        {location.state.cat + " , " + location.state.published}
                      </p>
                      <img src={location.state.img} />
                      {paragraphs.map((p, index) => (
                        <p key={index}>{p}</p>
                      ))}
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
                    <a href="javascript:void(0)">Comming Soon</a>
                  </li>
                  {/* <li className="forum-item">
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
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CricketNewsDetails;
