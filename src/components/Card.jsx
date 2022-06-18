import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.imgURL}`} className="card--image" />
      <div className="card--stats">
        <span>{props.location}</span>
      </div>
    </div>
  );
}
