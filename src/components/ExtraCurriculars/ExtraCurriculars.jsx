import React from "react";
import "./ExtraCurriculars.css";
import Card from "../Card/Card";
import ec from "../../img/ec.png";
const ExtraCurriculars = () => {

  return (
    <div className="extraCurriculars">
      <div className='extraCurricularsHeading'>EXTRA-CURRICULAR ACTIVITIES</div>
      <div className='extraCurricularsHeading ecimg'><img height="120px" src={ec} alt=''></img></div>
      <div className="ecdetails">
          <Card
            details={
            <p>
              <p>○ Definitely Nerds- A youtube channel dedicated to my podcasts on books or any other general topic.</p>
            </p>
            }
          />
      </div>
    </div>
  );
};

export default ExtraCurriculars;
