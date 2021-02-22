import React, { useState } from "react";
import competingcard from "../Competing/competingcard";

function Competing() {
  const [activeCard, setactiveCard] = useState(1);

  return (
    <>
      <div className="container competing">
        <div className="competing_title">
          <h3>PRICING</h3>
          <p>OUR COMPETING PRICES</p>
        </div>
        <div className="row">
          {competingcard.map((item, index) => (
            <Competingcard
              data={item}
              setactiveCard={() => setactiveCard(index)}
              activeCard={activeCard == index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Competingcard(props) {
  return (
    <>
      <div className="col-lg-3">
        <div
          onClick={() => props.setactiveCard()}
          className={`competing_cards mt-5 ${
            props.activeCard ? "active_card" : ""
          }`}
        >
          <div className="competing_cardtitle">
            <h3>{props.data.title}</h3>
          </div>
          <div className="competing_duration">
            <h4>{props.data.duration}</h4>
          </div>
          <div className="competing_descripttion">
            <p>{props.data.description_one}</p>
            <p> {props.data.description_two}</p>
            <p> {props.data.description_three}</p>
            <p> {props.data.description_four}</p>
            <p> {props.data.description_five}</p>
          </div>
          <div className="competing_btn">
            <button>{props.data.description_btn}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Competing;
