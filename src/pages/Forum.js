import React from "react";

function Forum() {
  return (
    <React.Fragment>

    <section class="home-main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 tournament-items-outer">
            <div class="tournament-items-inner">
              <h6 class="title">Tournaments</h6>
              <ul class="tournament-items-list">
                <li class="tournament-item">
                  <a href="javascript:void(0)"> FIFA World Cup 2022 </a>
                </li>
                <li class="tournament-item">
                  <a href="javascript:void(0)"> IEM Clogne 2022 </a>
                </li>
                <li class="tournament-item">
                  <a href="javascript:void(0)"> BAN vs WES Series </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 match-category-items-outer">
          <h4 class="sports-news-heading">Under development</h4>
            {/* <div class="match-schedule-items-wrapper plr-40">
              <h4 class="sports-news-heading">Under development</h4>

              <div class="sport-news-items">
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> NDTV Sports: </span>
                    Virat Kohli may miss next worldcup in 2022
                  </a>
                  <p class="item-post-time">2 Hours ago</p>
                </div>
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> ESPN: </span>
                    PSG beat Newcastle to Ekitike signing in $35 Mn
                  </a>
                  <p class="item-post-time">4 Hours ago</p>
                </div>
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> HLTV: </span>
                    Luck1 enters free agency
                  </a>
                  <p class="item-post-time">2 Hours ago</p>
                </div>
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> NDTV Sports: </span>
                    Virat Kohli may miss next worldcup in 2022
                  </a>
                  <p class="item-post-time">2 Hours ago</p>
                </div>
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> NDTV Sports: </span>
                    Virat Kohli may miss next worldcup in 2022
                  </a>
                  <p class="item-post-time">2 Hours ago</p>
                </div>
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> ESPN: </span>
                    PSG beat Newcastle to Ekitike signing in $35 Mn
                  </a>
                  <p class="item-post-time">4 Hours ago</p>
                </div>
                <div class="sport-news-item-inner">
                  <a href="#" class="item-link">
                    <span class="heading"> ESPN: </span>
                    PSG beat Newcastle to Ekitike signing in $35 Mn
                  </a>
                  <p class="item-post-time">4 Hours ago</p>
                </div>
              </div>


            </div> */}
          </div>
          <div class="col-lg-4 col-md-4 forum-items-outer">
            <div class="forum-items-inner">
              <h6 class="title">Forum</h6>
              <ul class="forum-items-list">
                <li class="forum-item">
                  <span>CSGO:</span>
                  <a href="javascript:void(0)"> Navi in terrific form (128) </a>
                </li>
                <li class="forum-item">
                  <span>News:</span>
                  <a href="javascript:void(0)"> Bangladesh ranks 3 (67) </a>
                </li>
                <li class="forum-item">
                  <span>Football:</span>
                  <a href="javascript:void(0)">
                    Messi will win worldcup this year (530)
                  </a>
                </li>
                <li class="forum-item">
                  <span>CSGO:</span>
                  <a href="javascript:void(0)"> Navi vs Astralis (448) </a>
                </li>
                <li class="forum-item">
                  <span>Off Topic:</span>
                  <a href="javascript:void(0)"> RIP Shinjo Abe(142) </a>
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

export default Forum;
