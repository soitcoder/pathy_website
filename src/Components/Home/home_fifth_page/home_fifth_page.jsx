import React from "react";
import "./home_fifth_page.css";
import SearchBar from "../searchbar/searchbar";

function HomeFifthPage(props) {
    return (

        <div className="hfifthp">
            <div className="hfifthp_upper">
                <h3>Health Information for All, Everywhere</h3>
                <p>
                    {props.fifthpagedata.text}
                </p>
                <div className="hfifthp_search">
                    <SearchBar diseaselist={props.searchpagedata.diseaseList} />
                </div>
            </div>
            
            <div className="hfifthp_lower">
                <img src="./Images/g69.png" alt="" />
            </div>
        </div>
    )
}

export default HomeFifthPage;