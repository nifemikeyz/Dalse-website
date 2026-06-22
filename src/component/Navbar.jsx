import React from "react";
import "./Navbar.css";
import logoImage from "../assets/img/logo-dark.png";
import { Link } from "react-router-dom";
import { ChevronDown, LineStyle } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <>
      <div>
        <nav className="navbar">
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
          {/*<p>list of pages</p>*/}
          <ul className="nav-links">
            <li
              onMouseEnter={() => setOpenMenu("home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Home
                <ChevronDown size={14} />
              </span>
              {openMenu == "home" && (
                <ul className="dropdown">
                  <li><Link to ="/">Home1</Link></li>
                  <li><Link to = "/home2">Home2</Link></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("Pages")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Pages
                <ChevronDown size={14} />
              </span>
              {openMenu == "Pages" && (
                <ul className="dropdown">
                  <li>Services</li>
                  <li>About</li>
                  <li>Alunmi</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("News")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                News
                <ChevronDown size={14} />
              </span>
              {openMenu == "News" && (
                <ul className="dropdown">
                  <li>News1</li>
                  <li>News2</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("Element")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Element
                <ChevronDown size={14} />
              </span>
              {openMenu == "Element" && (
                <ul className="dropdown">
                  <li>Typography</li>
                  <li>Bullet</li>
                </ul>
              )}
            </li>
            <li>Contact</li>
            <li
              onMouseEnter={() => setOpenMenu("Docs")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span>
                Docs
                <ChevronDown size={14} />
              </span>
              {openMenu == "Docs" && (
                <ul className="dropdown">
                  <li>Get started</li>
                  <li>Component</li>
                </ul>
              )}
            </li>
          </ul>
          <Link className="purchase-btn" to={"/purchase"}>PURCHASE</Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
