import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row l-footer">
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Events</p>
            </div>
            <div className="l_footer_list">
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Code Quest
                </a>
              </div>
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Cook-Off 2024
                </a>
              </div>
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Decode DSA
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Blogs</p>
            </div>
            <div className="l_footer_list">
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Blog 1
                </a>
              </div>
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Blog 2
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Our Team</p>
            </div>
            <div className="l_footer_list">
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Batch 2024-25
                </a>
              </div>
              <div className="l_footer_link">
                <a href="/" className="footer_link">
                  Batch 2023-24
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Follow Us</p>
            </div>
            <div className="l_footer_list">
              <a href="/" className="footer_link footer-icons">
                <IoLogoInstagram />
              </a>
              <a href="/" className="footer_link footer-icons">
                <CiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <p className="copy-right-para">
          &copy; {new Date().getFullYear()} Copyright All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;