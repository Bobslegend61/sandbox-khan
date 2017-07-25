import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        <div id="header">
            <h1>
                You can learn anything.<br />
                For free. For everyone. Forever.
            </h1>
            <button type="button" className="first"><div>Choose your subject</div></button>
            <button type="button" className="second"><div>Teachers, start here</div></button>
            <button type="button" className="third"><div>Parents, start here</div></button>
        </div>
    )
}

export default Header;