import React, { useState } from "react";
import "./Header.css";
import logoWhite from "../images/logo-white.png";
import phoneLogoWhite from "../images/phone-logo-white.png";

function Header() {
  const [scrolledNavbar, setScrolledNavbar] = useState(false);
  let scrollAmount = 650;

  if (window.innerWidth < 650) {
    scrollAmount = 150;
  }

  function changeNavbarColor() {
    if (window.scrollY >= scrollAmount) {
      setScrolledNavbar(true);
    } else {
      setScrolledNavbar(false);
    }
  }
  window.addEventListener("scroll", changeNavbarColor);

  function scrollToPage(id) {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className={`header-container  ${
        scrolledNavbar ? "header-container-scrolled" : ""
      }`}
    >
      <button className="header-image" onClick={() => scrollToPage("page01")}>
        <img src={logoWhite} alt="logo" className="header-logo" />
      </button>
      <button className="header-links" onClick={() => scrollToPage("page02")}>
        Ev
      </button>
      <button className="header-links" onClick={() => scrollToPage("page04")}>
        Konsept
      </button>
      <button className="header-links" onClick={() => scrollToPage("page05")}>
        Daireler
      </button>
      <button className="header-links" onClick={() => scrollToPage("page06")}>
        Galeri
      </button>
      <button className="header-links" onClick={() => scrollToPage("page09")}>
        Konum
      </button>

      <div className="phone-links">
        <a className="header-phone-number" href="tel:443330000">
          <span className="telephone-icon">📞</span> 44 333 00 00
        </a>
        <a
          className={`link-button ${
            scrolledNavbar ? "link-button-scrolled" : ""
          }`}
          rel="noopener noreferrer"
          target="_blank"
          href="https://360stories.com/paris/place/eiffel-tower"
        >
          <img src={phoneLogoWhite} alt="logo" className="button-image" />
          <span>360 TUR</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
