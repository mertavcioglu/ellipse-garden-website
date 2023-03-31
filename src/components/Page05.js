import React from "react";
import "./Page05.css";
import buildingPlan from "../images/building-plan.jpg";

function Page05() {
  return (
    <div className="page05-container page-container" id="page05">
      <h1 className="page05-header">DAİRE</h1>
      <div className="page05-box-container">
        <div className="page05-box-continer-left-column">
          <p className="page05-box-container-left-column-header">
            DARHAN'DA <br /> YENİ BİR YAŞAM...
          </p>
          <div className="page05-brown-box">
            <div className="page05-list">
              <p className="page05-list-items">
                1+1 ____________________________
                <span className="meter-square">50 m²</span>
              </p>
              <p className="page05-list-items">
                2+1 ____________________________
                <span className="meter-square">100 m²</span>
              </p>
              <p className="page05-list-items">
                3+1 ____________________________
                <span className="meter-square">150 m²</span>
              </p>
              <p className="page05-list-items">
                4+1 ____________________________
                <span className="meter-square">200 m²</span>
              </p>
            </div>
          </div>
        </div>
        <img src={buildingPlan} alt="buildingPlan" className="buildingPlan" />
      </div>
    </div>
  );
}

export default Page05;
