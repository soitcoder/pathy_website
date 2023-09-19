import React, { useState } from "react";
// import img1 from "../assets/women.png";
import "./diseases_first_page.scss";

const TEXT = `Migraine is a common neurological disease that causes a variety of symptoms, most notably a throbbing, pulsing headache on one side of your head. Your migraine will likely get worse with physical activity, lights, sounds or smells. It may last at least four hours or even days. About 12% of Americans have this genetic disorder. Research shows that it’s the sixth most disabling disease in the world.`;

const thinScrollbarStyle = {
  "webkit-scrollbar": {
    display: "none",
  },
};

const Top = ({data}) => {
  const [isReadMore, setIsReadMore] = useState(false);
 
  return (
    <>
      <div className="extraspace">{/* Hello */}</div>
      <div className="diseases-top-main">
        <div className="diseases-top-container">
          <div className="disease-left">
            <img src={data.imageLink} alt="img" />
            {/* <img src={img1} alt="img" /> */}
          </div>
          <div className="disease-right">
            <h1 style={{textTransform:"capitalize"}}>{data.disease}</h1>
            <p>
           {data.text}
            </p>
            <h2>Summary</h2>
            <p>
              {isReadMore ? `${data.summary}` : `${data.summary}`.slice(0, 400)}

              <a
                onClick={() => {
                  setIsReadMore(!isReadMore);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                <br />
               {!isReadMore?"...Read More":"Read Less..."}
              </a>
            </p>
          </div>
        </div>
        <civ className="diseases-top-end">
          <div className="g-line">
            <div className="g-round">Pathies</div>
          </div>
        </civ>
      </div>
    </>
  );
};

export default Top;
