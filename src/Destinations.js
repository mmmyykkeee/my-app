import React from "react";

function Destinations(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt="" width={150} height={150} />
        <div className="right-card">
          <div className="link-location">
            <p className="location">{props.location}</p>
            <a href="">{props.link}</a>
          </div>
          <h1 className="name">{props.place}</h1>
          <p className="date">{props.date}</p>
          <p className="info">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
