import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      {showTopBar && (
        <div className="top-bar">
          Besplatna dostava za porudzbine preko 3000 dinara
        </div>
      )}

      {/* Header */}
      <header className={`main-header ${showTopBar ? "with-top-bar" : ""}`}>
        <div className="container d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <a href="/" className="logo d-flex align-items-center mb-2 mb-lg-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-journals icon-color"
              viewBox="0 0 16 16"
            >
              <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
              <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigacija + search + avatar */}
          <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <ul className="nav">
              <li><a href="#" className="nav-link navbar-link">Overview</a></li>
              <li><a href="#" className="nav-link navbar-link">Inventory</a></li>
              <li><a href="#" className="nav-link navbar-link">Customers</a></li>
              <li><a href="#" className="nav-link navbar-link">Products</a></li>
            </ul>
            <form className="search-form" role="search">
              <input type="search" placeholder="Search..." aria-label="Search"/>
            </form>
            <div className="avatar">
              <a href="#" className="dropdown-toggle">
                <img
                  src="https://github.com/mdo.png"
                  alt="avatar"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
