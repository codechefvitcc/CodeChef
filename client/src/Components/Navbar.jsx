import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Main header for larger screens */}
      <header className="fixed w-full z-50 shadow-md bg-white flex justify-between items-center h-18 px-15">
        <div className="flex items-center">
          {/* Logo for larger screens */}
          <div className="w-36">
            <Link to="/" className="hidden sm:block">
              <img
                src="https://cdn.codechef.com/images/cc-logo.svg"
                alt="CodeChef Logo"
                className="w-full"
              />
            </Link>
            {/* Logo for smaller screens */}
            <Link to="/" className="block sm:hidden">
              <img
                src="https://cdn.codechef.com/images/cc-logo-mobile-1.svg"
                alt="CodeChef Logo"
                className="w-full"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          {/* Navigation bar */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex space-x-4">
                  {/* Events dropdown */}
                  <li className="nav-item dropdown mx-2 relative">
                    <Link
                      className="nav-link dropdown-toggle active"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => e.preventDefault()}
                    >
                      Events
                    </Link>
                    <ul className="dropdown-menu absolute hidden bg-white shadow-md rounded mt-2">
                      <li>
                        <Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/">
                          Cook-Off 2024
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/">
                          Decode DSA
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* Blogs link */}
                  <li className="nav-item mx-2">
                    <Link to="/" className="nav-link active">
                      Blogs
                    </Link>
                  </li>
                  {/* Our Team dropdown */}
                  <li className="nav-item dropdown mx-2 relative">
                    <Link
                      className="nav-link dropdown-toggle active"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => e.preventDefault()}
                    >
                      Our Team
                    </Link>
                    <ul className="dropdown-menu absolute hidden bg-white shadow-md rounded mt-2">
                      <li>
                        <Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/">
                          2023-24 Batch
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Join Us button */}
          <div className="ml-4">
            <Link to="/" className="inline-block border border-blue-700 text-blue-700 font-semibold py-1.5 px-7 rounded hover:bg-blue-700 hover:text-white transition">
              Join Us!
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile header for smaller screens */}
      <header className="md-header hidden w-full absolute bg-white mt-18 px-15 h-16 flex justify-center">
        <nav className="navbar navbar-expand navbar-light">
          <div className="container-fluid">
            <ul className="navbar-nav mb-2 mb-lg-0 flex space-x-4">
              {/* Events dropdown for mobile */}
              <li className="nav-item dropdown mx-2 relative">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Events
                </Link>
                <ul className="dropdown-menu absolute hidden bg-white shadow-md rounded mt-2">
                  <li>
                    <Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/">
                      Cook-Off 2024
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/">
                      Decode DSA
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Blogs link for mobile */}
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link active">
                  Blogs
                </Link>
              </li>
              {/* Our Team dropdown for mobile */}
              <li className="nav-item dropdown mx-2 relative">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Our Team
                </Link>
                <ul className="dropdown-menu absolute hidden bg-white shadow-md rounded mt-2">
                  <li>
                    <Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/">
                      2023-24 Batch
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;