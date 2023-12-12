import React from "react";
import v from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {

    return (<div className={v.container}>
            <img src="https://i.imgur.com/PPBq9Cz.png"></img>
            <div className={v.items}>
                <Link to="menu">Types</Link>
                <Link to="korzina">Lives</Link>
                <Link to="support">Anouncements</Link>
            </div>
                <label className="custom-field" aria-label="Enter Email">
                    <input type="email"/>
                </label>
        </div>
    )
}

export default Header;