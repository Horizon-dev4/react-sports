import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
    
      <section class="home-main-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-2 tournament-items-outer">
              <div class="tournament-items-inner mt-20">
                <h6 class="title">Tournaments</h6>
                <ul class="tournament-items-list">
                  <li class="tournament-item">
                    <Link to="/first">
                      <i class="far fa-futbol"></i>
                      FIFA World Cup 2022
                    </Link>
                  </li>
                  <li class="tournament-item">
                    <a href="javascript:void(0)">
                      <i class="fa-solid fa-diamond"></i>
                      IEM Clogne 2022
                    </a>
                  </li>
                  <li class="tournament-item">
                    <a href="javascript:void(0)">
                      <i class="fa-solid fa-basketball"></i>
                      BAN vs WES Series
                    </a>
                  </li>
                  <li class="tournament-item">
                    <a href="javascript:void(0)">
                      <i class="fa-solid fa-basketball"></i>
                      BAN vs WES Series
                    </a>
                  </li>
                  <li class="tournament-item">
                    <a href="javascript:void(0)">
                      <i class="fa-solid fa-basketball"></i>
                      BAN vs WES Series
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 match-category-items-outer">
              <div class="match-category-items-inner">
                <Link to="/Live-Cricket-Matches" class="match-category-item">
                  Cricket
                </Link>
                <Link to="/football-news" class="match-category-item"> 
                Football
                </Link>               
                <Link to="/esports" class="match-category-item">
                  Esports
                </Link>
              </div>

              {/* middle section start from here */}

              <div class="match-schedule-items-wrapper">
                <link to="/Live-Cricket-Matches"></link>
                {/* <h4 class="date-title">Saturday – 2022/07/16</h4> */}
                <div class="match-item-outer">
                  <div class="match-time">
                    {/* <i class="fas fa-futbol"></i>
                    <p>17:00</p> */}
                  </div>
                  <div class="match-name">
                    {/* <p>
                      Natus Vincere <b> VS </b> Astralis
                    </p> */}
                  </div>
                  <div class="match-type">
                    {/* <p>IEM Tournaments</p> */}
                  </div>
                  <div class="predition-btn">
                    {/* <Link to="/Prediction"> Prediction </Link> */}
                  </div>
                </div>
                <div class="match-item-outer">
                  <div class="match-time">
                    {/* <i class="fas fa-futbol"></i>
                    <p>17:00</p> */}
                  </div>
                  <div class="match-name">
                    {/* <p>
                      Natus Vincere <b> VS </b> Astralis
                    </p> */}
                  </div>
                  <div class="match-type">
                    {/* <p>IEM Tournaments</p> */}
                  </div>
                  <div class="predition-btn">
                    {/* <Link to="/Prediction"> Prediction </Link> */}
                  </div>
                </div>
                <div class="match-item-outer">
                  <div class="match-time">
                    {/* <i class="fas fa-futbol"></i>
                    <p>17:00</p> */}
                  </div>
                  <div class="match-name">
                    {/* <p>
                      Natus Vincere <b> VS </b> Astralis
                    </p> */}
                  </div>
                  <div class="match-type">
                    {/* <p>IEM Tournaments</p> */}
                  </div>
                  <div class="predition-btn">
                    {/* <Link to="/Prediction"> Prediction </Link> */}
                  </div>
                </div>
                <div class="match-item-outer">
                  <div class="match-time">
                    {/* <i class="fas fa-futbol"></i>
                    <p>17:00</p> */}
                  </div>
                  <div class="match-name">
                    {/* <p>
                      Natus Vincere <b> VS </b> Astralis
                    </p> */}
                  </div>
                  <div class="match-type">
                    {/* <p>IEM Tournaments</p> */}
                  </div>
                  <div class="predition-btn">
                    {/* <Link to="/Prediction"> Prediction </Link> */}
                  </div>
                </div>
              </div>

            {/* right section start from here */}


            </div>
            <div class="col-lg-4 col-md-4 forum-items-outer">
              <div class="forum-items-inner mt-20">
                <h6 class="title">Forum</h6>
                <ul class="forum-items-list">
                  <li class="forum-item">
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

      <script src="assets/js/jquery-3.6.0.min.js"></script>
      <script src="assets/js/slick.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/main.js"></script>
    </React.Fragment>
  );
}
