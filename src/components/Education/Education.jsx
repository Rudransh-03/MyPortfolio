import React from 'react'
import './Education.css';
import education from "../../img/education.png";

const Education = () => {
  return (
    <div className='education'>
      <div className='educationHeading'>EDUCATION</div>
      <div className='educationHeading eimg'><img height="110px" src={education} alt=''></img></div>
        <table className='education-table'>
        <thead>
          <tr>
            <th>Type of Education</th>
            <th>Year</th>
            <th>School/University</th>
            <th>Grade/Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.TECH (Software Engineering)</td>
            <td>2020-2024</td>
            <td>Delhi Technological University, New Delhi</td>
            <td>9.56 CGPA (till 6th sem)</td>
          </tr>
          <tr>
            <td>CBSE (Class XII)</td>
            <td>2020</td>
            <td>Mayo International School, New Delhi</td>
            <td>95.2 %</td>
          </tr>
          <tr>
            <td>CBSE (Class X)</td>
            <td>2018</td>
            <td>Delhi Public School, Indirapuram</td>
            <td>96.8 %</td>
          </tr>
        </tbody>
      </table>
      </div>
  )
}

export default Education