import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <img src="assets/images/Logo2.png" />
        </div>
        {/* sub menu */}
        <div className="container footer-menu">
          <div className="footer-menu-inner">
            <Link>Terms & Conditions</Link>
            <Link>Privacy policy</Link>
            <Link>Cookie Policy</Link>
            {/* <Link to="/contact">Contact Us</Link> */}
            
            {/* popup modal link */}
            <Link role="button" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Us</Link>
            {/* Total Modal */}
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">

                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Contact Us
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <form action="" className="contact-form">
                        <label htmlFor="name" className="">Your Name</label>
                        <input type="text" id="name" name="name"/>

                        <label htmlFor="name" className="mt-2">Your Email</label>
                        <input type="email" id="email" name="email"/>

                        <label htmlFor="subject" className="mt-2">Subject</label>
                        <input type="text" id="subject" name="subjet"/>

                        <label htmlFor="name" className="mt-2">Your Message</label>
                        <textarea name="comment" id="comment" cols="48" rows="6"></textarea>
                        
                        <input type="submit" value="Send" className="contact-submit"/>
                      </form>
                    </div>

                    <div className="modal-footer">
                      {/* <button type="button" className="btn btn-primary">
                        Send
                      </button>
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                        Close
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer social icons */}
        <div className="footer-social">
          <a href="#">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <p>
          Copyright © 2022 "Win Bet for You" All rights reserved. The
          information contained in Win Bet for you may not be published,
          broadcast, rewritten, or redistributed without the prior written
          authority of Win Bet for you.
        </p>
      </footer>
    </>
  );
}

export default Footer;
