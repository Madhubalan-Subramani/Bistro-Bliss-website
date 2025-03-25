import React from "react";
import Images from "../assets/images";
import "../css/event_content.css";

function EventContent() {
  return (
    <>
      <div className="EventContent">
        <div className="Event_topic">
          We also offer unique <br />
          services for your events
        </div>

        <div className="E_cards"> 
          <div className="Event_card">
            <div className="card_photo">
              <img src={Images.event_Catering} alt="" />
            </div>
            <div className="card_title">Caterings</div>
            <div className="card_descripiton">
              In the new era of technology we look in the future with certainty
              for life.
            </div>
          </div>

          <div className="Event_card">
            <div className="card_photo">
              <img src={Images.event_Birthday} alt="" />
            </div>
            <div className="card_title">Birthdays</div>
            <div className="card_descripiton">
              In the new era of technology we look in the future with certainty
              for life.
            </div>
          </div>

          <div className="Event_card">
            <div className="card_photo">
              <img src={Images.event_Wedding} alt="" />
            </div>
            <div className="card_title">Weddings</div>
            <div className="card_descripiton">
              In the new era of technology we look in the future with certainty
              for life.
            </div>
          </div>

          <div className="Event_card">
            <div className="card_photo">
              <img src={Images.event_Event} alt="" />
            </div>
            <div className="card_title">Events</div>
            <div className="card_descripiton">
              In the new era of technology we look in the future with certainty
              for life.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventContent;
