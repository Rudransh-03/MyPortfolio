import React from 'react'
import "./TechSkills.css";
import Card from "../Card/Card";
import skills from "../../img/skills.png";

const TechSkills = () => {
  return (
    <div className="techSkills">
      <div className='skillsHeading'>TECHNICAL SKILLS</div>
      <div className='skillsHeading simg'><img height="110px" src={skills} alt=''></img></div>
      <div className="sdetails">
          <Card
            details={
            <p>
              <p>○ LANGUAGES - Java</p>
              <p>○ WORKED WITH - MailChimp | Git | HTML | CSS| Heroku | NodeJS | EJS | ReactJS | Javascript | EmailJS |
ChartJS | SpringBoot</p>
              <p>○ FAMILIAR WITH - OOPs | DBMS | OS | C++ | Computer Networks | System Design</p>
            </p>
            }
          />
      </div>
    </div>
  )
}

export default TechSkills