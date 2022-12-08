import React from "react";

function Contact() {
  return (
    <>
      <section className="home-main-section">
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

            <div className="col-lg-6 col-md-6 match-category-items-outer">
              <div className="match-schedule-items-wrapper plr-40">
                <h4 className="form-heading">Contact Us</h4>
                {/* contact form */}
                <div>
                  <form action="" className="contact-form">
                    <label htmlFor="name" className="">Your Name</label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="name" className="mt-2">Your Email</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="subject" className="mt-2">Subject</label>
                    <input type="text" id="subject" name="subjet"/>

                    <label htmlFor="name" className="mt-2">Your Message</label>
                    <textarea name="comment" id="comment" cols="52" rows="8"></textarea>

                    <input type="submit" value="Send" className="contact-submit"/>
                  </form>
                </div>
              </div>
            </div>

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

export default Contact;
