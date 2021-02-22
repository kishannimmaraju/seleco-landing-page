import React from "react";
import portfolio_img1 from "../assets/images/portfolio_img1.jpg";
import portfolio_img2 from "../assets/images/portfolio_img2.jpg";
import portfolio_img3 from "../assets/images/portfolio_img3.jpg";
import portfolio_img4 from "../assets/images/portfolio_img4.jpg";
import portfolio_img5 from "../assets/images/portfolio_img5.jpg";
import portfolio_img6 from "../assets/images/portfolio_img6.jpg";
import portfolio_img7 from "../assets/images/portfolio_img7.jpg";
import portfolio_img8 from "../assets/images/portfolio_img8.jpg";
import portfolio_img9 from "../assets/images/portfolio_img9.jpg";

function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="portfolio-title">
          <h3>PORTFOLIO</h3>
          <p>LIO WHAT WE'VE DONE</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img1} alt="" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img2} alt="" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img3} alt="" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img4} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img5} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img6} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img7} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img8} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio_image">
              <img src={portfolio_img9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
