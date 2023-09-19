import React, { useState, useEffect } from "react";
import "./pathy_second_page.css";
import DisplayCard from "./DisplayCard/DisplayCard" 

function PathySecondPage(props) {
  const [data, setData] = useState();
  console.log(props)

  return (
    <div className="psp-1">
      <div className="psp-2">
        
        {props.searchpagedata.pathyList.map((innerData,index)=> (
          // console.log(index)
          <DisplayCard  Data={{innerData,index}} />
        ))}
      </div>
      </div>
    
  );
}

export default PathySecondPage;
