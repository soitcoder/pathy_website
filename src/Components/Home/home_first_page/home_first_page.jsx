import React from "react";
import SearchBar from "../searchbar/searchbar";
import "./home_first_page.css";

function HomeFirstPage(props){

    return(
        <div className="hfp_outer"> 

            <div className="hfp_outer_left">
                <h1 className="hfp_outer_left_heading">
                    Are You Confused about your line of treatment?
                </h1>
                <h3 className="hfp_outer_left_smallerheading">
                    Which Therapy? Which Doctor? Which Clinic?
                </h3>   
                <span className="hfp_outer_left_text">
                    With Some Valuable Testimonial Shared By Common People Of Different Treatments. 
                    Find Out Which Therapy Out Of Many May Suit You Best !
                </span>
                <div className="hfp_outer_left_searchbar"><SearchBar diseaselist={props.searchpagedata.diseaseList} /></div>
                
            </div>


            <div className="hfp_outer_right">
                <img src="./Images/UmbrellaOverview.png" alt="" className="hfp_outer_right_image"/>
            </div>


        </div>
    );
}

export default HomeFirstPage;