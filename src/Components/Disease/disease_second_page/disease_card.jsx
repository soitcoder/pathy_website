import React, { useState } from "react";

const card_3_array = [
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
];

const card_4_array = [
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
  <div className="cardForPathies">
    <img className="cowImage"></img>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="253"
      height="253"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H240.276C246.904 0 252.276 5.37258 252.276 12V240.276C252.276 246.904 246.904 252.276 240.276 252.276H12C5.37259 252.276 0 246.904 0 240.276V12Z"
        fill="url(#paint0_linear_280_230)"
        fill-opacity="0.6"
      />
      <path
        d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H240.276C246.628 0.5 251.776 5.64873 251.776 12V240.276C251.776 246.628 246.628 251.776 240.276 251.776H12C5.64873 251.776 0.5 246.628 0.5 240.276V12Z"
        stroke="#053B3F"
        stroke-opacity="0.13"
      />
      <defs>
        <linearGradient
          id="paint0_linear_280_230"
          x1="126.138"
          y1="-1.15091e-07"
          x2="126"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD5AFF" />
          <stop offset="1" stop-color="#F2A5A9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="cardName">Cow Therapy</h2>
    <div className="divForPara">
      <p className="cardPara">
        Cow urine is traditionally used as ayurvedic medicine treating various
        ailments, including migraine. With a consistent{" "}
        <a style={{ color: "blue" }}>...Read more</a>{" "}
      </p>
    </div>
  </div>,
];

const Disease_card = () => {
  const [pathiesButton, setPathiesButton] = useState(2);

  function RenderPathiesCard() {
    if (pathiesButton === 1) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "8rem",
          }}
        >
          {card_3_array.map((ele) => (
            <div style={{ flex: "0 0 20%" }}>{ele}</div>
          ))}
        </div>
      );
    } else {
      if (pathiesButton === 3) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "8rem",
            }}
          >
            {card_3_array.map((ele) => (
              <div style={{ flex: "0 0 20%" }}>{ele}</div>
            ))}
          </div>
        );
      }
    }

    return (
      <>
        {/* 4 card  */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "4rem",
          }}
        >
          {card_4_array.map((ele) => (
            <div style={{ flex: "0 0 20%" }}>{ele}</div>
          ))}
        </div>

        {/* 3 card  */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "8rem",
          }}
        >
          {card_3_array.map((ele) => (
            <div style={{ flex: "0 0 20%" }}>{ele}</div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="buttonForDisease">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => {
              setPathiesButton(1);
            }}
            type="button"
            className={`btn btn-secondary ${[pathiesButton === 1 ? 'button2' : 'button1']} `}
          >
            Pathies with Drugs
          </button>
          <button
            onClick={() => {
              setPathiesButton(2);
            }}
            type="button"
            className={`btn btn-secondary ${[pathiesButton === 2 ? 'button2' : 'button1']} `}
          >
            Therapies without Drugs
          </button>
          <button
            onClick={() => {
              setPathiesButton(3);
            }}
            type="button"
            className={`btn btn-secondary ${[pathiesButton === 3 ? 'button2' : 'button1']} `}
          >
            Less Known Therapies
          </button>
        </div>
      </div>

      <RenderPathiesCard />
    </div>
  );
};

export default Disease_card;
