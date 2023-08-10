import React from 'react'
import './Intro.css';
import pngegg from "../../img/pngegg.png";
import Github from "../../img/github.png";
import Leetcode from "../../img/leetcode.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className='intro-parent'>
        
        <div className='name'>
            HI! I AM <div className='rname'>RUDRANSH TYAGI</div>
            <div className='about'>A full stack web-developer and a coding enthusiast 😄</div>
            <div className='icons'>
                <a href='https://github.com/Rudransh-03'><img src={Github} alt=''></img></a>
                <a href='https://www.linkedin.com/in/rudransh-tyagi-66b3ab1b7/'><img src={LinkedIn} alt=''></img></a>
                <a href='https://www.instagram.com/__rudraa03__/'><img src={Instagram} alt=''></img></a>
                <a href='https://leetcode.com/rUdy_mEntAry/'><img className='lc' src={Leetcode} alt=''></img></a>
            </div>
            <div className='pdf button contact'>
              <Link><a className='viewPdf' href='https://drive.google.com/file/d/1TlbyXkdaB7CBabRMQjCcuMUH1-81c0XV/view?usp=sharing'>View in PDF</a></Link>
            </div>
        </div>
        
        <div className='image'>
            <img className='v1' src={Vector1} alt="" height='50%'/>
            <img className='v2' src={Vector2} alt="" height='50%'/>
            <img className='person' src={pngegg} alt='' height='100%'></img>
        </div>
    </div>
  )
}

export default Intro