import React from "react";
import logo from '../images/logo.png'
import '../css/styles.css'

const Header = () => {
    return (
        <div className="nav">
            <div>
                <img className="nav-img" src={logo} alt="" />
            </div>
            <div>
                <p className="nav-title">Meme Generator</p>
            </div>
        </div>

    )
}

export default Header