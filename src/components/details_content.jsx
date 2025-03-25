import React from "react";
import Images from "../assets/images";
import "../css/details_content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBarcode,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function DetailsContent() {
  return (
    <>
      <div className="DetailsContent">
        <div className="Detail_left">
          <div className="Detail_image_1st_layout">
            <img src={Images.detail_Image1} alt="" />
          </div>
          <div className="Detail_image_2st_layout">
            <img src={Images.detail_Image2} style={{height:"60%"}} alt="" />
            <img src={Images.detail_Image3} style={{height:"40%"}} alt="" />
          </div>
        </div>
        <div className="Detail_right">
          <div className="Detail_topic">Fastest Food Delivery in City</div>
          <div className="Detail_description">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </div>
          <div className="Detail_subTopic">
            <div className="Detail_subContent">
              <div className="Detail_subIcon">
                <FontAwesomeIcon icon={faClock} size="1x" />
              </div>
              <div className="Detail_subDescription">
                Delivery within 30 minutes
              </div>
            </div>
            <div className="Detail_subContent">
              <div className="Detail_subIcon">
                <FontAwesomeIcon icon={faBarcode} size="1x" />
              </div>
              <div className="Detail_subDescription">Best Offer & Prices</div>
            </div>
            <div className="Detail_subContent">
              <div className="Detail_subIcon">
                <FontAwesomeIcon icon={faCartShopping} size="1x" />
              </div>
              <div className="Detail_subDescription">
                Online Services Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsContent;
