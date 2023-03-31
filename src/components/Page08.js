import React from "react";
import "./Page08.css";
import interior01 from "../images/interior01.jpg";

function Page08() {
  return (
    <div className="page08-container page-container" id="page08">
      <img src={interior01} alt="interior" className="page08-image" />
      <div className="page08-right-column">
        <p className="page08-right-column-header">
          DARHAN'DA <br /> YENİ BİR YAŞAM...
        </p>
        <p className="page08-right-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          placeat, ad et est dolor repellat voluptatibus quasi amet reiciendis
          ducimus minima praesentium minus possimus voluptatem architecto
          adipisci unde autem? Id?
        </p>
        <p className="page08-right-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque
          dignissimos voluptatem error quos debitis quasi neque molestias?
          Assumenda odio incidunt sit magnam quod minus error suscipit possimus
          aliquid?
        </p>
      </div>
    </div>
  );
}

export default Page08;
