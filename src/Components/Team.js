import React from "react";
import teamimg_one from "../assets/images/teamimg_one.jpg";
import teamimg_two from "../assets/images/teamimg_two.jpg";
import teamimg_three from "../assets/images/teamimg_three.jpg";
import teamimg_four from "../assets/images/teamimg_four.jpg";

function Team() {
  return (
    <>
      <div className="container  team">
        <div className="team_title">
          <h3>TEAM</h3>
          <p>OUR HARDWORKING TEAM</p>
        </div>
        <div className="row team_img">
          <div className="col-lg-3">
            <img src={teamimg_one} alt="" />
            <div className="teamimage_title">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teamimage_title">
              <img src={teamimg_two} alt="" />

              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teamimage_title">
              <img src={teamimg_three} alt="" />

              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teamimage_title">
              <img src={teamimg_four} alt="" />

              <h4>William Anderson</h4>
              <span>CTO</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
