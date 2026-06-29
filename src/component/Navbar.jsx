import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import logoDark from "../assets/img/logo-dark.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      <div className="container">
        {/* Top Bar */}
        <div className="topbar">
          <div className="topbarclose">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <MapPin size={14} color="#e8a020" fill="#e8a020" />
              1010 Avenue, New York, NY 10018 US.
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Phone size={14} color="#e8a020" fill="#e8a020" />
              212 386 5575, 212 386 5576
            </span>
          </div>
          <div className="topbarclose">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Clock size={14} color="#1a2340" fill="#e8a020" />
              Mon-Sat, 8.00-18.00. Sunday CLOSED
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div>
        {/* Main Nav */}
        <nav className="navbar">
          {/* Logo */}
          <Link to="/">
            <img src={logoDark} alt="Elixir Logo" className="logo" />
          </Link>

          {/* Nav Links */}
          <ul className="nav-links">
            {/* Home */}
            <li
              onMouseEnter={() => setOpenMenu("home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Home
                <ChevronDown size={14} />
              </span>
              {openMenu === "home" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/">Home 1</Link>
                  </li>
                  <li>
                    <Link to="/home-2">Home 2</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Pages */}
            <li
              onMouseEnter={() => setOpenMenu("pages")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Pages
                <ChevronDown size={14} />
              </span>
              {openMenu === "pages" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/alumni">Alumni</Link>
                  </li>
                  <li>
                    <Link to="/blank">Blank Page</Link>
                  </li>
                  <li>
                    <Link to="/404">404 Page</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/registration">Registration</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* News */}
            <li
              onMouseEnter={() => setOpenMenu("news")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                News
                <ChevronDown size={14} />
              </span>
              {openMenu === "news" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/news-grid">News Grid</Link>
                  </li>
                  <li>
                    <Link to="/news-list">News List</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Elements */}
            <li
              onMouseEnter={() => setOpenMenu("elements")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Elements
                <ChevronDown size={14} />
              </span>
              {openMenu === "elements" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/typography">Typography</Link>
                  </li>
                  <li>
                    <Link to="/buttons">Buttons</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            {/* Docs */}
            <li
              onMouseEnter={() => setOpenMenu("docs")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Docs
                <ChevronDown size={14} />
              </span>
              {openMenu === "docs" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/docs/getting-started">Getting Started</Link>
                  </li>
                  <li>
                    <Link to="/docs/components">Components</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Purchase Button */}
          <Link to="/purchase" className="purchase-btn">
            Purchase
          </Link>
        </nav>
      </div>
    </>
  );
}
