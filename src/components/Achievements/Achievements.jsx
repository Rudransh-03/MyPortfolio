import React from "react";
import "./Achievements.css";
import Card from "../Card/Card";
import achievements from "../../img/achievements.png";
const Services = () => {

  return (
    <div className="achievements">
      <div className='achievementsHeading'>ACHIEVEMENTS</div>
      <div className='achievementsHeading aimg'><img height="110px" src={achievements} alt=''></img></div>
      <div className="adetails">
          <Card
            details={
            <p>
              <p>○ Stood among the top 3 teams in the BNY Mellon’s interns’ hackathon ‘23</p>
              <p>○ Top 10 global position out of 500 teams in GeeksforGeeks Idea Summit ‘21</p>
            </p>
            }
          />
      </div>
    </div>
  );
};

export default Services;
