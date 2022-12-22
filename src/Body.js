import React from "react";

export default function Body() {
    return (
      <div>
        <div className="container body-container">
          <div className="image">
            <img src="https://source.unsplash.com/WLxQvbMyfas" alt=" Japan" />
          </div>
          <div>
            <div className="text">
              <div className="location"> Japan</div>
              <div className="link">
                {" "}
                <a href="">View in Google Maps</a>
              </div>
            </div>

            <div className="heading">
              <p></p>
              <p>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan, for both Japanese and foreign tourists.
              </p>
            </div>
          </div>
        </div>
        <div className="container body-container">
          <div className="image">
            <img
              src="https://source.unsplash.com/JmuyB_LibRo"
              alt="Australia"
            />
          </div>
          <div>
            <div className="text">
              <div className="location"> Australia</div>
              <div className="link">
                {" "}
                <a href="">View in Google Maps</a>
              </div>
            </div>

            <div className="heading">
              <p></p>
              <p>
                The Sydney Opera House is a multi-venue performing arts centre
                in Sydney. Located on the banks of the Sydney Harbour, it is
                often regarded as one of the 20th century's most famous and
                distinctive buildings
              </p>
            </div>
          </div>
        </div>
        <div className="container body-container">
          <div className="image">
            <img src="https://source.unsplash.com/3PeSjpLVtLg" alt="Norway" />
          </div>
          <div>
            <div className="text">
              <div className="location"> Norway</div>
              <div className="link">
                {" "}
                <a href="">View in Google Maps</a>
              </div>
            </div>

            <div className="heading">
              <p></p>
              <p>
                The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og
                Romsdal county, Norway. It is located entirely in the Stranda
                Municipality.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}