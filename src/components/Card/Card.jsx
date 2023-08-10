import React from "react";
import "./Card.css";

const Card = ({heading, details, duration}) => {
  return (
    <div className="card">
      <div className="card-heading">{heading}</div>
      <div className="duration">{duration}</div>
      <div className="card-details">{details}</div>
    </div>
  );
};

export default Card;
