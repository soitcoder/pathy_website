import React, { useState, useEffect } from "react";
import "./pathy_first_page.css";
import background from "./greeninfographics.png"

import PathyCard from "./pathyCard/pathyCard";

// style={{ backgroundImage: `url(${background})` }}
function PathyFirstPage(props) {
  const [data, setData] = useState();

  console.log(props)

  return (
    <div className="pfp-1" >
    <div style={{ backgroundImage: `url(${background})` , width:'100%' , height:'100%'}} >
      <h1 className="pfp-2">Pathy Gallery</h1>
      <div className="pfp-3">Each path is a unique roadway to wellness</div>
      <div className="pfp-4">
        Know briefly about different therapies, the books and resources to go
        into depth, and the specific diseases each of these therapies address
        well.
      </div>
      <div className="pfp-5">
        {props.searchpagedata.pathyList.map((innerData) => (
          <PathyCard titleData={innerData.title} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default PathyFirstPage;
