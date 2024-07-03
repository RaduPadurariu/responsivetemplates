import React from "react";
import "./MusicFooter.css";
import MusicNavLinks from "../Navbar/MusicNavLinks/MusicNavLinks";
const MusicFooter = () => {
  return (
    <footer className="musicFooter">
      <div className="musicFooter_container">
        <div className="musicFooter_newsletter_container">
          <div className="musicFooter_newsletter_title">
            <h2>Subscribe to our newsletter</h2>
          </div>
          <form
            action="#"
            id="musicFooter_newsletter_form"
            className="musicFooter_newsletter_form"
          >
            <input
              type="email"
              className="musicFooter_newsletter_input"
              placeholder="Your E-mail"
              required="required"
            />
            <button className="musicFooter_newsletter_button">Subscribe</button>
          </form>
        </div>

        <div className="musicFooter_lists ">
          <div className="musicFooter_list">
            <div className="musicFooter_list_title">Useful Links</div>
            <MusicNavLinks />
          </div>

          <div className="musicFooter_list">
            <div className="musicFooter_list_title">Mixtape</div>
            <ul>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">PR & Marketing</a>
              </li>
              <li>
                <a href="#">Concerts</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="musicFooter_list">
            <div className="musicFooter_list_title">Connect</div>
            <ul>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Shippings</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Soundcloud</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="musicFooter_copyright_bar">
        <span>
          Copyright &copy; All rights reserved | This template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Radu Padurariu inspired from Colorlib
          </a>
        </span>
      </div>
    </footer>
  );
};

export default MusicFooter;
