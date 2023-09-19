import React, { useState } from "react";
import "./disease_first_page.css";

const TEXT = `Different kinds of therapies help different patients. Some patients
were cured by Homeopathy. Some are cured by following a particular
kind of diet its mostly PBWF along with green juice ajd green
leaves. Many patients found pranayam to be very effective.
Acupunture/acupressure also works well. A large number of patients
observed that mind plays a major role in this disease. so meditation
or relaxing, not thinking about the disease helped them. Lorem Ipsum
is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled
it to make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the
release of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum'`;

const thinScrollbarStyle = {
   'webkit-scrollbar': {
        display: 'none'
        }
  }; 

const Disease_first_page = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className="hfp_outer">
      <div className="disease_outer_right">
        <img alt="migraine image" />
      </div>

      <div className="disease_outer_left_flex">
        <div className="disease_outer_left">
          <h1 className="disease_outer_left_heading">MIGRANE</h1>
          <h3 className="disease_outer_left_smallerheading">
            Migraine is a common neurological disease that causes a variety of
            symptoms, most notably a throbbing, pulsing headache on one side of
            your head. Your migraine will likely get worse with physical
            activity, lights, sounds or smells. It may last at least four hours
            or even days. About 12% of Americans have this genetic disorder.
            Research shows that it’s the sixth most disabling disease in the
            world.
          </h3>

          <h2 style={{ paddingBottom: "10px", fontWeight: "450" }}>
            Summary from all Therapies-
          </h2>
          <span className="hfp_outer_left_text">
            <div 
            style={{ height: "165px", overflowY: isReadMore && 'scroll'  }}
            >
              {isReadMore ? TEXT : TEXT.slice(0, 442)}

              {!isReadMore && (
                <a
                  onClick={() => {
                    setIsReadMore(!isReadMore);
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  ...Read More
                </a>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Disease_first_page;
