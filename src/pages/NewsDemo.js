import React from "react";

export default function News() {
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
                    <a href="javascript:void(0)"> Comming  </a>
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
