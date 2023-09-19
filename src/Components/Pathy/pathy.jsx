import React, { useState, useEffect } from "react";
import "./pathy.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import PathyFirstPage from "./pathy_first_page/pathy_first_page";
import PathySecondPage from "./pathy_second_page/pathy_second_page";

function Pathy() {
  const [pathyData, setPathyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getapidata = async () => {
      try {
        const datafetch = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/pathy/`
        );
        setPathyData(datafetch.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getapidata();
  }, []);

  
  return (
    <>
      {!pathyData || loading ? (
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
          <PathyFirstPage searchpagedata={pathyData} />
          <PathySecondPage searchpagedata={pathyData} />
        </>
      )}
    </>
  );
}

export default Pathy;
