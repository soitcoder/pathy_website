import React, { useEffect, useState } from "react";
import "./diseases_second_page.scss";
// import img2 from "../assets/cow.png";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Top from "../diseases_first_page/diseases_first_page";

const Bottom = () => {
      
  const [selectedTherapy, setSelectedTherapy] = useState("therapiesWithDrugs");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getapidata = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/disease/migraine`
        );
        const fetchedData = response.data;

        if (fetchedData && fetchedData.pathies) {
          setData(fetchedData);
          setLoading(false);
        } else {
          console.error("API response structure is not as expected.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getapidata();
  }, []);

  const handleButtonClick = (therapyType) => {
    setSelectedTherapy(therapyType);
  };

  const toggleReadMore = (index) => {
    setData((prevData) => ({
      ...prevData,
      pathies: {
        ...prevData.pathies,
        [selectedTherapy]: prevData.pathies[selectedTherapy].map((therapy, i) => ({
          ...therapy,
          isReadMore: i === index ? !therapy.isReadMore : false,
        })),
      },
    }));
  };

  const therapyArray = data.pathies && data.pathies[selectedTherapy];

  return (
    <>
      <Top data={data}/>
      <div>
        {loading ? (
          <ClipLoader
            className="loadingicon"
            color="green"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <div className="diseases-bottom-main">
              <div className="diseases-bottom-container">
                <div className="disease-bottom-buttons">
                  {Object.keys(data.pathies || {}).map((therapyType, index) => (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(therapyType)}
                      className={selectedTherapy === therapyType ? "disease-therapy-button" : ""}
                    >
                      {therapyType}
                    </button>
                  ))}
                </div>

                <div className="disease-cards">
                  {therapyArray &&
                    therapyArray.map((therapy, index) => (
                      <div key={index} className="disease-card">
                       <div className="disease-card-img">
                       <img src={therapy.imageLink} alt="" />
                       {/* <img src={img2} alt="" /> */}
                       </div>
                        <h4>{therapy.name}</h4>
                        <p>
                          {therapy.isReadMore
                            ? therapy.summary
                            : therapy.summary.slice(0, 70)}
                          <a
                            onClick={() => {
                              toggleReadMore(index);
                            }}
                            style={{ color: "blue", cursor: "pointer" }}
                          >
                            <br />
                            {!therapy.isReadMore ? "...Read More" : "Read Less..."}
                          </a>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Bottom;
