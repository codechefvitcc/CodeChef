import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

import { getAllBlogs } from "../../api/apiCall";
import { ErrorBox } from "../../Utility";
import { FaSpinner } from "react-icons/fa";

import "../../Styles/Navigations/Footer.css";

const Footer = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const data = await getAllBlogs();
      if (data.error) {
        setError(true);
      } else {
        setBlogs(data);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const displayBlogs = blogs.slice(0, 2);

  const handleBlogLink = (blog) => {
    const formattedTitle = blog.heading.replace(/\s+/g, '-');
    navigate(`/blogs/${formattedTitle}`, { state: { url: blog.imageUrl, hashCode: blog.imageHashCode, title: blog.heading, date: blog.date, about: blog.about, details: blog.blog[0].children[0].text, blogs: blogs } });
  };
  
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
              {/* <div className="l_footer_link">
              <Link
                  to="/events/Decode-DSA"
                  className="footer_link"
                >
                  Decode DSA
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-sm-3 col-md-3 my-2">
            <div className="l_footer_col">
              <p className="l_footer_head">Blogs</p>
            </div>
            <div className="l_footer_list">
              {loading ? (
                  <div className="flex justify-center items-center">
                    <FaSpinner className="spinner text-center text-xl sm:text-3xl" />
                  </div>
                ) : error ? (
                  <div className="flex">
                    <ErrorBox />
                  </div>
                ) : (
                  displayBlogs.map((blog, index) => (
                    <div className="l_footer_link" key={index}>
                      <span 
                        className="footer_link"
                        onClick={() => handleBlogLink(blog)}
                      >
                        {blog.heading}
                      </span>
                    </div>
                  ))
              )}
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
                to="https://www.linkedin.com/company/codechef-vit-chennai-chapter/" className="footer_link footer-icons" target="_blank"
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
          With ❤ By CodeChef VITC Chapter
        </p>
      </div>
    </>
  );
};

export default Footer;