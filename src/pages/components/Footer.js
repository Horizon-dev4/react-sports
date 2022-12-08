import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <img src="assets/images/Logo2.png" />
        </div>
        {/* sub menu */}
        <div className="container footer-menu">
          <div className="footer-menu-inner">
            <Link>Terms & Conditions</Link>
            <Link>Privacy policy</Link>
            <Link>Cookie Policy</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        {/* footer social icons */}
        <div class="footer-social">
          <a href="#">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
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
