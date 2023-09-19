import react from "react";
import "./DisplayCard.css";

function DisplayCard(props) {
console.log(props.Data.index)
  return (
    <div id={`patty-data-${props.Data.innerData.title}`}  className={props.Data.index%2==0 ? "dc-1" : "dc-1-new"}>
       <img src={props.Data.innerData.imageLink} className="dc-3" />
      <div className="dc-2">
        <div className="dc-4">
          <div className="dc-5">{props.Data.innerData.title}</div>
          <div className="dc-6">{props.Data.innerData.text}</div>
          <div>
            most effective for:
            <div>
            {props.Data.innerData.diseaseList.map((innerData) => (
              <a className="dc-7" href={innerData.link}>
                {innerData.disease}
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default DisplayCard;
