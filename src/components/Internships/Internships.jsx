import React from 'react';
import "./Internships.css";
import Card from "../Card/Card";
import workEx from "../../img/workEx.png";

const Internships = () => {
  return (
    <div className="experience">
      <div className='work-ex-heading'>WORK EXPERIENCE</div>
      <div className='work-ex-heading img'><img height="100px" src={workEx} alt=''></img></div>
      <div className="ex-details">
          <Card
            heading={"Bank of New York Mellon (BNY Mellon), Pune | Software Development Intern"}
            duration={"May 2023 - August 2023"}
            details={<p>
              <p>○ Worked in backend and developed 10+ APIs to provide mock data to be used by 100s of developers and
testers within the organization</p>
              <p>○ Integrated the backend with h2-database and made it persistent</p>
              <p>○ Included role-based authentication to securely facilitate separation of actions based on user roles</p>
              <p>○ Performed unit testing of the backend maintaining a coverage of 90% or above in all the classes</p>
              <p>○ Developed a website for a school for specially abled children in Pune as a part of CSR activity</p>
              <p>○ TECH STACK USED: Java | SpringBoot</p>
            </p>}
          />
      </div>
    </div>
  )
}

export default Internships