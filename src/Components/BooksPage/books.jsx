import react from "react"
import "./books.css"
import SeparateBook from "./Books/separatebooks";

function Books(){
    return(
        <div className="B_outer">
            <div className="B_outer_top">
                <h2>&#60; Migraine/Accupressure/Books & Book Chapters</h2>
            </div>
            <div className="B_outer_bottom">
                <div className="B_inner_top">
                    <img src="./images/bookStack.png" alt="_blank"/>
                    <h1>Books & Book Chapters</h1>
                </div>
                <div className="B_inner_bottom">
                    <div className="B_inner_left">
                        <SeparateBook className="Sbclass" />
                        <SeparateBook className="Sbclass" />
                        <SeparateBook className="Sbclass" />
                        <SeparateBook className="Sbclass" />
                    </div>
                    <div className="B_inner_right">
                        <img src="./images/bookCase.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;