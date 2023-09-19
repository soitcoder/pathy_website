import React from "react";
import "./htp_testimonial.css";

function HTPTestimonial(props) {

    let testimonialtextdata=props.testimonialtext;

    return (
        <div className="htpt_outer">
            <div className="htpt_outer_top">
                <h4 className="htpt_outer_top_heading">
                    {testimonialtextdata.heading}
                </h4>
                <span className="htpt_outer_top_text">
                    {testimonialtextdata.text.slice(0,300)}...  
                </span>
            </div>

            
            <div className="htpt_outer_mid">
                <div className="htpt_outer_bottom">
                    <span className="htpt_outer_bottom_name">
                        {testimonialtextdata.name}
                    </span>
                    <span className="htpt_outer_bottom_location">
                        {testimonialtextdata.location}
                    </span>
                </div>
            </div>

        </div>
    );
}

export default HTPTestimonial;