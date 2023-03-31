import React from "react";
import "./Page02.css";
import phoneLogoWhite from "../images/phone-logo-white.png";
import page02Right from "../images/crop.png";

function Page02() {
  return (
    <div className="page02-container page-container" id="page02">
      <div className="page02-left-column">
        <p className="page02-left-column-header">
          DARHAN'DA <br /> YENİ BİR YAŞAM...
        </p>
        <p className="page02-left-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptatibus expedita, dolor obcaecati et excepturi dolores ut impedit
          dicta quas, esse nulla quibusdam recusandae quidem eius voluptatem nam
          iusto laudantium.
        </p>
        <p className="page02-left-column-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          laboriosam dolore dolor consequuntur earum. Aliquam fugiat sint rem
          voluptatem. Omnis aliquam sint atque esse harum iure tenetur cum vero
          corporis?
        </p>
        <img
          src={phoneLogoWhite}
          alt="phoneLogoWhite"
          className="page02-left-column-image"
        />
      </div>
      <div className="page02-right-column">
        <img
          src={page02Right}
          alt="buildings2"
          className="page02-right-column-image"
        />
        <p className="page02-right-column-header">
          DARHAN'DA YENİ BİR YAŞAM...
        </p>
        <p className="page02-right-column-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          doloribus.
        </p>
        <p className="page02-right-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tenetur impedit officiis corporis itaque earum, doloribus ex
          doloremque consequuntur dicta!
        </p>
      </div>
    </div>
  );
}

export default Page02;
