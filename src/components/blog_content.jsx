import React from "react";
import "../css/blog_content.css"
import Images from "../assets/images";

function BlogContent() {
  return (
    <>
      <div className="BlogContent">
        <div className="Blog_header">
          <div className="Blog_title">Our Blog & Articles</div>
          <div className="Blog_article">Read All Articles</div>
        </div>
        <div className="Blog_layout">
          <div className="Blog_left">
            <div className="Blog_bigLayout">
              <img src={Images.blog_image1} alt="" />
              <div className="biglayout_date">January 3, 2023</div>
              <div className="layout_name">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </div>
              <div className="layout_description">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </div>
            </div>
          </div>
          <div className="Blog_right">
            <div className="Blog_rightLayout">
              <div className="Blog_smlLayout">
                <img src={Images.blog_image2} alt="" />
                <div className="smllayout_date">January 3, 2023</div>
                <div className="smllayout_name">
                  How to prepare the perfect french fries in an air fryer
                </div>
              </div>
              <div className="Blog_smlLayout">
                <img src={Images.blog_image3} alt="" />
                <div className="smllayout_date">January 3, 2023</div>
                <div className="smllayout_name">
                  How to prepare delicious chicken tenders
                </div>
              </div>
            </div>
            <div className="Blog_rightLayout">
              <div className="Blog_smlLayout">
                <img src={Images.blog_image4} alt="" />
                <div className="smllayout_date">January 3, 2023</div>
                <div className="smllayout_name">
                  7 delicious cheesecake recipes you can prepare
                </div>
              </div>
              <div className="Blog_smlLayout">
                <img src={Images.blog_image5} alt="" />
                <div className="smllayout_date">January 3, 2023</div>
                <div className="smllayout_name">
                  5 great pizza restaurants you should visit this city
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
