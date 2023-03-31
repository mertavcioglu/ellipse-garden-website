import React from "react";
import "./Page07.css";
import buildingComplex from "../images/building-complex.jpg";

function Page07() {
  return (
    <div className="page07-container page-container" id="page07">
      <h1 className="page07-header">DAİRE</h1>
      <div className="page07-box-container">
        <div className="page07-box-continer-left-column">
          <p className="page07-box-container-left-column-header">
            DARHAN'DA <br /> YENİ BİR YAŞAM...
          </p>
          <div className="page07-brown-box">
            <ul className="page07-list">
              <li className="page07-list-items">
                1+1 ____________________________
                <span className="meter-square">50 m²</span>
              </li>
              <li className="page07-list-items">
                2+1 ____________________________
                <span className="meter-square">100 m²</span>
              </li>
              <li className="page07-list-items">
                3+1 ____________________________
                <span className="meter-square">150 m²</span>
              </li>
              <li className="page07-list-items">
                4+1 ____________________________
                <span className="meter-square">200 m²</span>
              </li>
            </ul>
          </div>
        </div>
        <img
          src={buildingComplex}
          alt="buildingComplex"
          className="buildingComplex"
        />
      </div>
    </div>
  );
}

export default Page07;
