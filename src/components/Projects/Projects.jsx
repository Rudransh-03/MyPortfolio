import React from 'react'
import "./Projects.css";
import Card from "../Card/Card";
import projects from "../../img/projects.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className='pheading'>PROJECTS</div>
      <div className='pheading pimg'><img height="150px" src={projects} alt=''></img></div>
      
      <div className="pdetails">
          <Card
            heading={"Cryptocurency Tracker Website"}
            duration={"November 2022"}
            details={<p>
              <p>○ A website that displays the current and well as the change in prices of 100 crypto currencies</p>
              <p>○ Used Coin Gecko API to fetch real time values of the crypto currencies in both INR and USD</p>
              <p>○ Detailed graphical analysis of each crypto currency appears on a separate page if a user searches for a
particular crypto currency.</p>
              <p>○ TECH STACK USED: ReactJS | Material UI | ChartJS</p>
            </p>}
          /> </div>
         
         <div className="pdetails"> 
         <Card
            heading={"Personal Brand Portfolio Website"}
            duration={"March 2022"}
            details={<p>
              <p>○ A website where self-written blogs can be created and uploaded</p>
              <p>○ The website provides more than just 1 functionality. It provides an option to the viewers to view the
videos and subscribe to my newsletter and receive weekly emails as well.</p>
              <p>○ TECH STACK USED: HTML | CSS | Javascript | NodeJS | EJS | MongoDB</p>
            </p>}
          />
          </div>
          
    </div>
  )
}

export default Projects