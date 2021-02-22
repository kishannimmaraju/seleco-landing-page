import React, { useState } from "react";
import rightarrow from "../assets/images/right-arrow.png";
import aboutimgone from "../assets/images/aboutimgone.png";
import aboutimgtwo from "../assets/images/aboutimgtwo.png";
import aboutimgthree from "../assets/images/aboutimgthree.png";
import aboutimgfour from "../assets/images/aboutimgfour.png";

function AboutCards() {
  const [state, setState] = useState({
    firsttab: true,
    secondtab: false,
    thirdtab: false,
    fourthtab: false,
  });

  function handleClick(tab) {
    let newTabs = { ...state };
    newTabs = Object.keys(newTabs).map((item) => (newTabs[item] = false));
    newTabs[tab] = true;
    setState(newTabs);
  }

  return (
    <>
      <div className="container aboutcards-container">
        <div className="row">
          <div className="col-lg-3">
            <div
              className={`about-cardone ${
                state.firsttab && "active_about_cardone"
              }`}
            >
              <h4 onClick={() => handleClick("firsttab")}>
                Modi sit est dela pireda nest
              </h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className={`about-cardone ${
                state.secondtab && "active_about_cardone"
              }`}
            >
              <h4 onClick={() => handleClick("secondtab")}>
                Unde praesenti mara setra le
              </h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className={`about-cardone ${
                state.thirdtab && "active_about_cardone"
              }`}
            >
              <h4 onClick={() => handleClick("thirdtab")}>
                Unde praesenti mara setra lePariat
              </h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className={`about-cardone ${
                state.fourthtab && "active_about_cardone"
              }`}
            >
              <h4 onClick={() => handleClick("fourthtab")}>
                Nostrum qui dile node
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* about-first tab card begin */}
      {state.firsttab ? (
        <div className="container aboutcards-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-first-tabcontent">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
              </div>
              <p className="about-italicpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="about-paraicons">
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
            <div className="col-lg-6">
              <img src={aboutimgone} alt="" className="pl-2" />
            </div>
          </div>
        </div>
      ) : null}

      {/* about-first tab card end */}

      {/* about-second tab card begin */}
      {state.secondtab ? (
        <div className="container aboutcards-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-first-tabcontent">
                <h3>
                  Neque exercitationem debitis soluta quos debitis quo mollitia
                  officia est
                </h3>
              </div>
              <p className="about-italicpara">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <div className="about-paraicons">
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Provident mollitia neque rerum asperiores dolores quos qui a.
                  Ipsum neque dolor voluptate nisi sed
                </p>
              </div>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur. Ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate trideta storacalaperda
                mastiro dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={aboutimgtwo} alt="" className="pl-2" />
            </div>
          </div>
        </div>
      ) : null}
      {/* about-second tab card end */}

      {/* about-third tab card begin */}
      {state.thirdtab ? (
        <div className="container aboutcards-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-first-tabcontent">
                <h3>
                  Voluptatibus commodi ut accusamus ea repudiandae ut autem
                  dolor ut assumenda
                </h3>
              </div>
              <p className="about-italicpara">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <div className="about-paraicons">
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Provident mollitia neque rerum asperiores dolores quos qui a.
                  Ipsum neque dolor voluptate nisi sed.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="col-lg-6">
              <img src={aboutimgthree} alt="" className="pl-2" />
            </div>
          </div>
        </div>
      ) : null}
      {/* about-third tab card end */}

      {/* about-fourth tab card begin */}
      {state.fourthtab ? (
        <div className="container aboutcards-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-first-tabcontent">
                <h3>
                  Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                  inventore rerum
                </h3>
              </div>
              <p className="about-italicpara">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="about-paraicons">
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
                <p>
                  <span>
                    <img src={rightarrow} alt="" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={aboutimgfour} alt="" className="pl-2" />
            </div>
          </div>
        </div>
      ) : null}
      {/* about-fourth tab card end */}
    </>
  );
}

export default AboutCards;
