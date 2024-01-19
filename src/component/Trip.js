import React from "react";
import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div>
      <div className="trip">
        <h1>Recent Trip</h1>
        <p>You can discover unique Destination using Google Maps</p>
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Trips In Indonasia"
            text="Indonesia is the largest country in Southeast Asia, with a maximum dimension from east to west of about 3,200 miles (5,100 km) and an extent from north to south of 1,100 miles (1,800 km). It shares a border with Malaysia in the northern part of Borneo and with Papua New Guinea in the centre of New Guinea."
          />
          <TripData
            image={Trip2}
            heading="Trips In France"
            text="With landscapes as diverse as the limestone soils of Provence to the sun-kissed 
          vineyards of Bordeaux, France is the perfect holiday destination. For those wishing to 
          relax, there is nothing better than gazing into acres of vineyards, with freshly picked 
          grapes, a fine bottle of wine and pungent cheese for company."
          />

          <TripData
            image={Trip3}
            heading="Trips In Malasia"
            text="Malaysia known for its ultra-modern cities which stand in sharp contrast with scenic landscapes comprising pristine beaches, mighty waterfalls, lush green forests, and wildlife. The twin Petronas Towers, which are among the tallest
          buildings in the world, are in the Malaysian capital, Kuala Lumpur."
          />
        </div>
      </div>
    </div>
  );
}

export default Trip;
