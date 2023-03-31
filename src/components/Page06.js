import React from "react";
import "./Page06.css";
import interior02 from "../images/interior02.jpg";

function Page06() {
  return (
    <div className="page06-container page-container" id="page06">
      <div className="page06-left-column">
        <p className="page06-left-column-header">
          DARHAN'DA <br /> YENİ BİR YAŞAM...
        </p>
        <p className="page06-left-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          placeat, ad et est dolor repellat voluptatibus quasi amet reiciendis
          ducimus minima praesentium minus possimus voluptatem architecto
          adipisci unde autem? Id?
        </p>
        <p className="page06-left-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque
          dignissimos voluptatem error quos debitis quasi neque molestias?
          Assumenda odio incidunt sit magnam quod minus error suscipit possimus
          aliquid?
        </p>
      </div>
      <img src={interior02} alt="interior" className="page06-image" />
    </div>
  );
}

export default Page06;
