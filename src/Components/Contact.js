import React from "react";

function Contact() {
  return (
    <>
      <div className="container contact">
        <div className="contact_title">
          <h3>CONTACT</h3>
          <p>CONTACT US</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="location">
              <h4>Location</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="email">
              <h4>Email</h4>
              <p>info@example.com</p>
            </div>
            <div className="call">
              <h4>Call</h4>
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
          <div className="col-lg-8"></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
