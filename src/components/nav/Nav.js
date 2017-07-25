import React from "react";
import "./Nav.css";

const Nav = (props) => {
    return (
        <div id="nav">
            <nav className="container">
                <div className="nav-item left">
                    <div>Subjects &or;</div>
                    <div><input type="search" placeholder="search"/></div>
                </div>
                <div className="nav-item brand-name">
                    KHAN <span>ACADEMY</span>
                </div>
                <div className="nav-item right">
                    <ul>
                        { props.nav.map((item, i) => <li key={i}><a href="#">{ item }</a></li>) }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;