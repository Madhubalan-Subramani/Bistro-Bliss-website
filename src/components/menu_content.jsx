import React from "react";
import "../css/menu_content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faBowlFood,
  faGlassWater,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

function MenuContent() {
  return (
    <>
      <div className="menuContent">
        <div className="menuTopic">Browse Our Menu</div>
        <div className="cards">
          <div className="menuCard">
            <div className="menu_logo">
              <FontAwesomeIcon icon={faMugHot} size="2x" />
            </div>
            <div className="menu_topic">Breakfast</div>
            <div className="menu_description">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </div>
            <div className="Explorebutton">Explore Menu </div>
          </div>

          <div className="menuCard">
            <div className="menu_logo">
              <FontAwesomeIcon icon={faBowlFood} size="2x" />
            </div>
            <div className="menu_topic">Main Dishes</div>
            <div className="menu_description">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </div>
            <div className="Explorebutton">Explore Menu </div>
          </div>

          <div className="menuCard">
            <div className="menu_logo">
              <FontAwesomeIcon icon={faGlassWater} size="2x" />
            </div>
            <div className="menu_topic">Drink</div>
            <div className="menu_description">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </div>
            <div className="Explorebutton">Explore Menu </div>
          </div>

          <div className="menuCard">
            <div className="menu_logo">
              <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
            </div>
            <div className="menu_topic">Desserts</div>
            <div className="menu_description">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </div>
            <div className="Explorebutton">Explore Menu </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuContent;
