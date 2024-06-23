import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom'

import "../../Styles/Navigations/Footer.css";

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
                <Link
                  to="/events/Cook-Off-2024"
                  className="footer_link"
                >
                  Cook-Off 2024
                </Link>
              </div>
              <div className="l_footer_link">
              <Link
                  to="/events/Decode-DSA"
                  className="footer_link"
                >
                  Decode DSA
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Blogs</p>
            </div>
            <div className="l_footer_list">
              <div className="l_footer_link">
                <a href="/blogs/Some-event-that-happened" className="footer_link">
                  Blog 1
                </a>
              </div>
              <div className="l_footer_link">
                <a href="/blogs/Some-event-that-happened" className="footer_link">
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
                <Link
                  to="/our-teams"
                  className="footer_link"
                >
                  View Team
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Follow Us</p>
            </div>
            <div className="l_footer_list">
              <Link
                to="https://www.instagram.com/codechef.vitc/" className="footer_link footer-icons" target="_blank"
              >
                <IoLogoInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/company/codechef-vitc/mycompany/" className="footer_link footer-icons" target="_blank"
              >
                <CiLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <p className="copy-right-para">
          &copy; {new Date().getFullYear()} Copyright All Rights Reserved | Made
          With ❤ By VITCodeChef Chapter
        </p>
      </div>
    </>
  );
};

export default Footer;