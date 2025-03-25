import React from "react";
import Images from "../assets/images";
import "../css/about_content.css";

function AboutContent() {
  return (
    <>
      <div className="AboutContent">
        <div className="About_left">
          <img
            className="About_img"
            src={Images.about_image}
            alt="about_image"
          />
        </div>
        <div className="About_right">
          <div className="About_topic">
            We provide healthy food for your family.
          </div>
          <div className="About_subTopic">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </div>
          <div className="About_description">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </div>
          <div className="About_button"> More About Us</div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
