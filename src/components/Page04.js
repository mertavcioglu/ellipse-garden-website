import React from "react";
import "./Page04.css";
import interior01 from "../images/interior01.jpg";

function Page04() {
  return (
    <div className="page04-container page-container" id="page04">
      <img src={interior01} alt="interior" className="page04-image" />
      <div className="page04-right-column">
        <p className="page04-right-column-header">
          DARHAN'DA <br /> YENİ BİR YAŞAM...
        </p>
        <p className="page04-right-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          placeat, ad et est dolor repellat voluptatibus quasi amet reiciendis
          ducimus minima praesentium minus possimus voluptatem architecto
          adipisci unde autem? Id?
        </p>
        <p className="page04-right-column-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque
          dignissimos voluptatem error quos debitis quasi neque molestias?
          Assumenda odio incidunt sit magnam quod minus error suscipit possimus
          aliquid?
        </p>
      </div>
    </div>
  );
}

export default Page04;
