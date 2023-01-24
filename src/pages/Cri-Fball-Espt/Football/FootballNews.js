import React from 'react'
import { Link } from "react-router-dom";

export default function FootballNews() {
  return (
    <>
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
                <h1>We are coming soon</h1>
              
            </div>
            
            <div class="col-lg-4 col-md-4 forum-items-outer">
              <div class="forum-items-inner">
                <h6 class="title">Forum</h6>
                <ul class="forum-items-list">
                  <li class="forum-item">
                    <span>CSGO:</span>
                    <a href="javascript:void(0)">
                      {" "}
                      Navi in terrific form (128){" "}
                    </a>
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
    </>
  );
}
