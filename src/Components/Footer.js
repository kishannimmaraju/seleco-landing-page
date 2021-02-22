import React from "react";
import twitter_icon from "../assets/images/twitter.svg";
import facebook_icon from "../assets/images/facebook.svg";
import instagram_icon from "../assets/images/instagram.svg";
import linkedin_icon from "../assets/images/linkedin.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <h3>Selecao</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div
            className="row"
            style={{
              justifyContent: "center",
            }}
          >
            <div className="footer_icons">
              <img src={twitter_icon} alt="" />
              <img src={facebook_icon} alt="" />
              <img src={instagram_icon} alt="" />
              <img src={linkedin_icon} alt="" />
            </div>
          </div>
          <div className="coperight">
            <p className="coperight_secondpara">
              © Copyright <b> Selecao.</b> All Rights Reserved
            </p>
            <p>
              Designed by <span> BootstrapMade</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
