import react from "react";
import "./DisplayCard.css";

function DisplayCard(props) {

  return (
    <div id={`patty-data-${props.Data.title}`}  className={`dc-1`}>
       <img src={props.Data.imageLink} className="dc-3" />
      <div className="dc-2">
        <div className="dc-4">
          <div className="dc-5">{props.Data.title}</div>
          <div className="dc-6">{props.Data.text}</div>
          <div>
            most effective for:
            <div>
            {props.Data.diseaseList.map((innerData) => (
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
