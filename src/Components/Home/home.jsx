import React, {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import "./home.css";
import HomeFifthPage from "./home_fifth_page/home_fifth_page";
import HomeFirstPage from "./home_first_page/home_first_page";
import HomeFourthPage from "./home_fourth_page/home_fourth_page";
import HomeSecondPage from "./home_second_page/home_second_page";
import HomeThirdPage from "./home_third_page/home_third_page";


function Home(){
  
    const [homepagedata, setHomePageData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetching data from backend and controlling the loading icon
    useEffect(()=>{
      const getapidata = async () => {
        try{
          const datafetch = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/home/`);
          setHomePageData(datafetch.data);
          setLoading(false);
        }catch(error){  
          console.log(error);
        }
      };

      getapidata();
      
    },[]);

    return(
        <div>
            { (!homepagedata || loading) ?
            <ClipLoader className="loadingicon" color="green" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/> :
            <>
            <HomeFirstPage className="homefirstpage" searchpagedata={homepagedata.topSearchPage} />
            <HomeSecondPage className="homesecondpage" secondpagedata={homepagedata.ourMissionPage} />
            <HomeThirdPage className="homethirdpage" thirdpagedata={homepagedata.testimonialPage} />
            <HomeFourthPage className="homefourthpage" fourthpagedata={homepagedata.videoPage} />
            <HomeFifthPage className="homefifthpage" searchpagedata={homepagedata.topSearchPage} fifthpagedata={homepagedata.bottomSearchPage} />
            </>
            }
        </div>
    );
}

export default Home;