import React from "react";
import "./Pors.css";
import Card from "../Card/Card";
import management from "../../img/management.png";
const Pors = () => {

  return (
    <div className="pors">
      <div className='porHeading'>POSITIONS OF RESPONSIBILITIES</div>
      <div className='porHeading porimg'><img height="110px" src={management} alt=''></img></div>
      <div className="pordetails">
          <Card
            details={
            <p>
              <p>○ Co-Head at D_CODER DTU, a society which currently has 300+ active members</p>
              <p>○ Hosted Ideathon in TechQuest’21 which witnessed participation from more than 50 teams.</p>
            </p>
            }
          />
      </div>
    </div>
  );
};

export default Pors;
