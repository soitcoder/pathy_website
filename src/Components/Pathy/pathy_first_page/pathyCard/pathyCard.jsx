import react from "react";
import "./pathyCard.css";

function PathyCard(props) {
  let pathyTitle = props.titleData;

  const handleClick = () => {
    const element = document.querySelector(`#patty-data-${pathyTitle}`);
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <div  onClick={handleClick} className="pc-2">
      <button className="pc-1">{pathyTitle}</button>
    </div>
  );
}

export default PathyCard;
