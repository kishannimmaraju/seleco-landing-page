import React, { useRef, useState } from "react";
import arrow from "../assets/images/down-arrow.svg";

function Questions() {
  const [tabs, setTabs] = useState([
    {
      title: "Non consectetur a erat nam at lectus urna duis?",
      content: `Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
      volutpat lacus laoreet non curabitur gravida. Venenatis lectus
      magna fringilla urna porttitor rhoncus dolor purus non.`,
      active: false,
    },

    {
      title:
        "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      content: `Dolor sit amet consectetur adipiscing elit pellentesque habitant
    morbi. Id interdum velit laoreet id donec ultrices. Fringilla
    phasellus faucibus scelerisque eleifend donec pretium. Est
    pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
    cursus turpis massa tincidunt dui.`,
      active: false,
    },
    {
      title:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
      content: `Eleifend mi in nulla posuere sollicitudin aliquam ultrices
      sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla
      pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque
      eu tincidunt. Lectus urna duis convallis convallis tellus. Urna
      molestie at elementum eu facilisis sed odio morbi quis`,
      active: false,
    },
    {
      title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      content: `Dolor sit amet consectetur adipiscing elit pellentesque habitant
      morbi. Id interdum velit laoreet id donec ultrices. Fringilla
      phasellus faucibus scelerisque eleifend donec pretium. Est
      pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
      cursus turpis massa tincidunt dui.`,
      active: false,
    },
    {
      title:
        "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      content: ` Eleifend mi in nulla posuere sollicitudin aliquam ultrices
      sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla
      pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque
      eu tincidunt. Lectus urna duis convallis convallis tellus. Urna
      molestie at elementum eu facilisis sed odio morbi quis`,
      active: false,
    },
    {
      title:
        "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
      content: `
      Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
      vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
      nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut
      venenatis tellus in metus vulputate eu scelerisque. Pellentesque
      diam volutpat commodo sed egestas egestas fringilla phasellus
      faucibus. Nibh tellus molestie nunc non blandit massa enim nec.`,
      active: false,
    },
  ]);

  const contentRef = useRef(null);

  function handletabs(index) {
    let newTabs = [...tabs];
    newTabs[index].active = !newTabs[index].active;
    setTabs(newTabs);
  }
  return (
    <>
      <div className="container question">
        <div className="question_title">
          <h3>F.A.Q</h3>
          <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div className="">
          {tabs.map((tab, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 20,
                }}
              >
                <div>
                  <img
                    style={{
                      alignSelf: "flex-start",
                      transition: "0.5s",
                      transform: tab.active ? "rotate(180deg)" : "none",
                    }}
                    width="14px"
                    src={arrow}
                    alt=""
                  />
                </div>
                <div>
                  <h5
                    className="questions"
                    style={{ cursor: "pointer" }}
                    onClick={() => handletabs(index)}
                  >
                    {tab.title}
                  </h5>
                  <div
                    ref={contentRef}
                    style={{
                      transition: "0.5s",
                      maxHeight: tab.active
                        ? contentRef.current.scrollHeight
                        : 0,
                      overflow: "hidden",
                    }}
                  >
                    <p>{tab.content}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Questions;
