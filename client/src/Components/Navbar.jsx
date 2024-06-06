import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="leftHeader">
          <div className="headerLogo">
            <a href="/" className="laptop-logo">
              <img
                src="https://cdn.codechef.com/images/cc-logo.svg"
                alt="CodeChef Logo"
              />
            </a>
            <a href="/" className="mobile-logo">
              <img
                src="https://cdn.codechef.com/images/cc-logo-mobile-1.svg"
                alt="CodeChef Logo"
              />
            </a>
          </div>
        </div>
        <div className="rightHeader">
          <div className="headerNavigation">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown mx-2">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        Events
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/CookOff">
                            Cook-Off 2024
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Decode DSA
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mx-2">
                      <Link to="/blogs" className="nav-link active">
                        Blogs
                      </Link>
                    </li>
                    <li className="nav-item dropdown mx-2">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        Our Team
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="/">
                            2023-24 Batch
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="headerBtn">
            <Link to="/joinus">Join Us!</Link>
          </div>
        </div>
      </header>
      {/* the given below tag hold the element which appears only when the screen size is less else the upper part i.e the "header" will be visible */}
      <div className="md-header">
        <div className="headerNavigation">
          <nav className="navbar navbar-expand navbar-light">
            <div className="container-fluid">
              <div>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item dropdown mx-2">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => e.preventDefault()}
                    >
                      Events
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/CookOff">
                          Cook-Off 2024
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Decode DSA
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item mx-2">
                    <Link to="/CookOff" className="nav-link active">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item dropdown mx-2">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => e.preventDefault()}
                    >
                      Our Team
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          2023-24 Batch
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
