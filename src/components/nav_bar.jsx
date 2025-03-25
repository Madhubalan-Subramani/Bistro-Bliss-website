import React, { useState } from "react";
import "../css/nav_bar.css";
import Images from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [activePage, setActivePage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={Images.webstie_logo}
            className="website_logo"
            alt="Website Logo"
          />
          <img
            src={Images.webstie_name}
            className="website_name"
            alt="Website Name"
          />
        </div>
        <div className={menuOpen?"dropdown_pages":"pages" }>
          {["Home", "About", "Menu", "Page", "Contact"].map((page) => (
            <div
              key={page}
              className={`page_button ${
                activePage === page ? "activePage" : ""
              }`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </div>
          ))}
        </div>
        <div className="book_button">Book a Table</div>
        <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="1x" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
