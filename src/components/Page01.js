import React from "react";
import Header from "./Header";
import "./Page01.css";

function Page01() {
  return (
    <div className="page01-container page-container" id="page01">
      <Header />
      <a className="page01-application-button" href="mailto:deneme@gmail.com">
        Başvurunuzu Gönderin
      </a>
      <div className="page01-footer">ELLIPSE GARDEN - DARXON</div>
    </div>
  );
}

export default Page01;
