import React from 'react'

function Body({img, location,link,date,info}) {
  return (
    <div>      
      <div className="container">
        <div className="main">
          <div className="image">{img}</div>
          <div className="text">
            <div className="textual-content">
              <div className="location">{location}</div>
              <div className="link">{link}</div>
              </div>
            <p>{date} - {date}</p>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body
