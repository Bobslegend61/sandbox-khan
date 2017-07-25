import React from "react";
import "./Subject.css";

const SubjectDisplay = (props) => {
    
    return (
        <div>
            <div id="subject">
                { Object.keys(props.details.subjects).map((subject, i) => <a href="#" key={i} onMouseOver={(e) => e.target.className = props.details.hoverColor[i]} onMouseOut={(e) => e.target.classList.remove(props.details.hoverColor[i])} >{subject}</a>) }
            </div>
            <div className="subject-details">
                { Object.keys(props.details.subjects).map((sub,i) => <div key={i} >
                    <header className="subject-details-header">
                        <h1>{sub}</h1>
                    </header>
                    <ul className="subject-details-ul">
                        { props.details.subjects[sub].map((item, j) => <li keys={j} className={props.details.hoverColor[i]+" subject-details-li"}>{item}</li>) }
                    </ul>
                </div>
                ) }
            </div>
        </div>
    )
}

export default SubjectDisplay;