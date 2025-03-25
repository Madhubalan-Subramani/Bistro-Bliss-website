import React from "react";
import "../css/review_content.css";
import Images from "../assets/images";

function ReviewContent() {
  return (
    <>
      <div className="ReviewContent">
        <div className="Review_title">What Our Customers Say</div>
        <div className="Cards">
          <div className="Review_card">
            <div className="card_title">“The best restaurant”</div>
            <div className="card_description">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </div>
            <div className="card_divider"></div>
            <div className="card_footer">
              <div className="card_profile">
                <img src={Images.review_image1} alt="" />
              </div>
              <div className="card_profileDetail">
                <div className="card_profileName">Sophire Robson</div>
                <div className="card_profileLocation">Los Angeles, CA</div>
              </div>
            </div>
          </div>

          <div className="Review_card">
            <div className="card_title">“Simply delicious”</div>
            <div className="card_description">
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </div>
            <div className="card_divider"></div>
            <div className="card_footer">
              <div className="card_profile">
                <img src={Images.review_image2} alt="" />
              </div>
              <div className="card_profileDetail">
                <div className="card_profileName">Matt Cannon</div>
                <div className="card_profileLocation">San Diego, CA</div>
              </div>
            </div>
          </div>

          <div className="Review_card">
            <div className="card_title">“One of a kind restaurant”</div>
            <div className="card_description">
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </div>
            <div className="card_divider"></div>
            <div className="card_footer">
              <div className="card_profile">
                <img src={Images.review_image3} alt="" />
              </div>
              <div className="card_profileDetail">
                <div className="card_profileName">Andy Smith</div>
                <div className="card_profileLocation"> San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewContent;
