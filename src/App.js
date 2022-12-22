import "./App.css";
import Header from "./Header";
import TravelData from "./TravelData";
import Body from "./Body";
import Destinations from "./Destinations";



export default function App() {

  const travelDestinations = TravelData.map(places => {
    return <Destinations
      img={places.img} 
      location={places.location}
      link={places.link}
      date = {places.date}
      info = {places.info}
    />
  })
  return (
    <div>
      <Header />
      {travelDestinations}
    </div>
  );
}

 
