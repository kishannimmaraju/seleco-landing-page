import React from "react";
import service from "./service";

function Services() {
  return (
    <>
      <div className="container services">
        <div className="services-title">
          <h3>SERVICES</h3>
          <p>WHAT WE DO OFFER</p>
        </div>
        <div className="row">
          {service.map((item) => (
            <Servicecard data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function Servicecard(props) {
  return (
    <div className="col-lg-4 mt-4 ">
      <div className="service_cardbackground p-3">
        <div className="service_cardicon">
          <img src={props.data.img} alt="" />
        </div>
        <div className="service_cardtitle pt-3">
          <a href={props.data.cardtitle}>{props.data.cardtitle}</a>
        </div>
        <div className="service_description">
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
