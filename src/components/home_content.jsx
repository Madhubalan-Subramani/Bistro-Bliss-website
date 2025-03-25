import React from "react";
import "../css/home_content.css";

function Home() {
  return (
    <>
      <div className="HomeScreen">
        <div className="home_topic">Best food for <br/>your taste</div>
        <div className="home_subTopic">
          Discover delectable cuisine and unforgettable moments <br/> in our
          welcoming, culinary haven.
        </div>
        <div className="home_groupButton">
            <div className="button1">Book a Table</div>
            <div className="button2">Explore Menu </div>
        </div>
      </div>
    </>
  );
}

export default Home;
