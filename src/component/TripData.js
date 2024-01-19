import React from "react";
import "./TripStyle.css";

function TripData(props) {
  return (
    <div>
      <div className="t-card">
        <div className="t-image">
          <img src={props.image} alt="image"></img>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default TripData;
