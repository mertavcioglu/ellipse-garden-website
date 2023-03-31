import React from "react";
import "./Page09.css";
import logoColor from "../images/logo-color.png";
import location from "../images/location.jpg";
import kocLogo from "../images/koc-logo.jpg";
import marqLogo from "../images/marq-logo.png";

function Page09() {
  return (
    <div className="page09-container page-container" id="page09">
      <div className="page09-main">
        <div className="page09-left-column">
          <p className="page09-left-column-header">
            DARHAN'DA <br /> YENİ BİR YAŞAM...
          </p>
          <p className="page-09-left-column-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eius
            quidem accusamus est minima culpa non voluptate nostrum quasi alias
            et blanditiis veritatis pariatur, iure qui illum voluptas illo
            quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laborum, saepe.
          </p>
          <a
            className="page09-application-button"
            href="mailto:deneme@gmail.com"
          >
            Başvurunuzu Gönderin
          </a>
          <div>
            <img src={logoColor} alt="logo" className="page09-logo" />
          </div>
        </div>
        <div className="page09-right-column">
          <p className="page-09-right-column-header">KONUM</p>
          <iframe
            title="map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.050658849663!2d69.30512255985862!3d41.314076304945715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d0c78c5047%3A0xa0c94542773fe97!2sDarkhan%20Avenue%20Apartment%20Complex!5e1!3m2!1str!2str!4v1680175240065!5m2!1str!2str"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <img src={location} alt="city" className="page09-city-image" /> */}
          <div className="page09-right-column-company-info">
            <ul className="page09-right-column-company-info-contact">
              <li className="page09-right-column-company-info-contact-list">
                İLETİŞİM
              </li>
              <li className="page09-right-column-company-info-contact-list">
                Telefon: 0 212 333 22 00
              </li>
              <li className="page09-right-column-company-info-contact-list">
                Mail: info@ellipsegarden.com
              </li>
            </ul>
            <img src={kocLogo} alt="kocLogo" className="page09-koc-logo" />
          </div>
        </div>
      </div>
      <div className="page09-footer">
        <img src={marqLogo} alt="marqLogo" className="page09-marq-logo" />
      </div>
    </div>
  );
}

export default Page09;
