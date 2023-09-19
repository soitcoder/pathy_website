import React from "react";
import "./separatebooks.css";
import { NavLink } from "react-router-dom";

function SeparateBook(){
    return(
        <div className="Sb_outer">
            <div className="Sb_inner_left">
                <img src="./images/demobook.png" alt="_blank"/>
            </div>
            <div className="vertical_line"></div>
            <div className="Sb_inner_right">
                <h3>Accupressure Treatment And Food Therapy For headache <span>(Easwarabala)</span></h3>      
                <button><i class="fas fa-bolt"></i> Go to Amazon</button>
                <span className="summary_text">For Summary <NavLink className="Sb_Navlink">Click Here &#9654;</NavLink></span>
                <span className="rating_text">Our Rating for this Book</span>
            </div>
        </div>
    )
}

export default SeparateBook;