import React from "react";
import rightarrow from "../assets/images/right-arrow.png";

function About() {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-title">
              <h3>ABOUT</h3>
              <p>WHO WE ARE</p>
            </div>
            <div className="aboutcontent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="about-paraicons">
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>

                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-rightcontent">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button className="about-button">learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
