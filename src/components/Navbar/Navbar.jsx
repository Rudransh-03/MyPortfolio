import React from 'react'
import './Navbar.css';
import { Link } from "react-scroll";
import Education from '../Education/Education';
import Internships from '../Internships/Internships';


const Navbar = () => {
  return (
    <>
        <div className='navbar'>
        <div className='navItems pageNav'><Link spy={true} to='education' smooth={true}>Education</Link></div>
        <div className='navItems pageNav'><Link spy={true} to='experience' smooth={true}>Work-Exp</Link></div>
        <div className='navItems pageNav'><Link spy={true} to="projects" smooth={true}>Academic Projects</Link></div>
        <div className='navItems pageNav'><Link spy={true} to="achievements" smooth={true}>Academic Achievements</Link></div>
        <div className='navItems pageNav'><Link spy={true} to="techSkills" smooth={true}>Technical Skills</Link></div>
        <div className='navItems pageNav'><Link spy={true} to="pors" smooth={true}>PORs</Link></div>
        <div className='navItems pageNav'><Link spy={true} to="extraCurriculars" smooth={true}>Extra-Curriculars</Link></div>
        </div>
    </>
  )
}

export default Navbar