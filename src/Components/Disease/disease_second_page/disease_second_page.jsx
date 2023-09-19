import React from "react";
import "./disease_second_page.css";
import Disease_card from "./disease_card";

const Disease_second_page = () => {
  return (
    <div>
      <div className="greenLine">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="15px"
            viewBox="0 0 1440 9"
            fill="none"
          >
            <path d="M0 0H1440V9H0V0Z" fill="#053B3F" />
          </svg>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <svg
            className="buttonOnLine"
            xmlns="http://www.w3.org/2000/svg"
            width="402"
            height="71"
            viewBox="0 0 402 71"
            fill="none"
          >
            <path
              d="M0.5 35.5C0.5 15.8939 16.3939 0 36 0H366C385.606 0 401.5 15.8939 401.5 35.5C401.5 55.1061 385.606 71 366 71H36C16.3939 71 0.5 55.1061 0.5 35.5Z"
              fill="#053B3F"
            />
          </svg>
        </div>
        <h3
          style={{ display: "flex", justifyContent: "center" }}
          className="pathies"
        >
          Pathies
        </h3>
      </div>

      <Disease_card />
    </div>
  );
};

export default Disease_second_page;
